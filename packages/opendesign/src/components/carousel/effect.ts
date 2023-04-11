import { supportTouch } from '../_shared/dom';
import { isFunction } from '../_shared/is';
import { OTouch, PointMoveT } from '../_shared/pointer';

export interface EffectT {
  active: (slideIndex: number) => Promise<null | number>;
}
export interface EffectOptionT {
  onTouchstart?: () => void;
  onTouchend?: () => void;
  onChanged?: (from: number, to: number) => void;
}

export default abstract class Effect {
  total: number;
  currentIndex: number;
  onTouchstart: (() => void) | undefined;
  onTouchend: (() => void) | undefined;
  onChanged: ((to: number, from: number) => void) | undefined;
  private isTouchStart: boolean; // 是否开始touch事件
  private containerEl: HTMLElement;
  constructor(slideElList: HTMLElement[], slideContainer: HTMLElement, activeIndex: number, options?: EffectOptionT) {
    this.total = slideElList.length;

    this.containerEl = slideContainer;

    this.currentIndex = -1;

    // handle touch
    this.isTouchStart = false;
    this.onTouchstart = options?.onTouchstart;
    this.onTouchend = options?.onTouchend;
    this.onChanged = options?.onChanged;

    this.handleTouch();
  }
  abstract handleTouchStart(): void;
  abstract handleTouchMove(pos: PointMoveT, e: TouchEvent): void;
  abstract handleTouchEnd(pos: PointMoveT, e: TouchEvent): number | void;
  abstract active(toIndex: number, animate: boolean, force: boolean): Promise<null | number>;
  fixIndex(idx: number) {
    const i = idx % this.total;
    return i >= 0 ? i : i + this.total;
  }
  handleTouch() {
    if (!supportTouch()) {
      return;
    }
    new OTouch(this.containerEl, {
      onStart: () => {
        this.isTouchStart = true;
        this.handleTouchStart();

        if (isFunction(this.onTouchstart)) {
          this.onTouchstart();
        }
      },
      onMove: (pos, e) => {
        if (!this.isTouchStart) {
          return;
        }
        this.handleTouchMove(pos, e);
      },
      onEnd: (pos, e) => {
        if (!this.isTouchStart) {
          return;
        }
        this.isTouchStart = false;

        const toIdx = this.handleTouchEnd(pos, e);
        if (typeof toIdx === 'number') {
          const to = this.fixIndex(toIdx);
          this.active(to, true, true);
          if (this.onChanged) {
            this.onChanged(to, this.currentIndex);
          }
        }

        if (isFunction(this.onTouchend)) {
          this.onTouchend();
        }
      },
    });
  }
}
