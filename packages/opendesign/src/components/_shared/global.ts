import { ref } from 'vue';
import { ColorPool } from './utils';

// 尺寸
export const SizeTypes = ['large', 'medium', 'small'] as const;
export type SizeT = typeof SizeTypes[number];
export const defaultSize = ref<SizeT>('medium');
export function initSize(val: SizeT) {
  defaultSize.value = val;
}

// 圆角
export type RoundT = 'pill' | string;
export const defaultRound = ref<'pill' | string>('');
export function initRound(type: RoundT) {
  defaultRound.value = type;
}

// 方向
export const DirectionTypes = ['h', 'v'] as const;
export type DirectionT = typeof DirectionTypes[number];

export const VariantTypes = ['solid', 'outline', 'text'] as const;
export type VariantT = typeof VariantTypes[number];

export const ColorTypes = ['normal', 'primary', 'success', 'warning', 'danger'] as const;
export type ColorT = typeof ColorTypes[number];

export const Color2Types = ['normal', 'success', 'warning', 'danger'] as const;
export type Color2T = typeof ColorTypes[number];

// 随机颜色池
const PrestColor = ['#d9e6c3', '#ebd5be', '#d1e6de', '#e0ceeb', '#ebd3c7', '#e6dada', '#e3deeb', '#dedae6', '#cad0e8', '#cedeeb'];
export const PrestColorPool = ref(new ColorPool(PrestColor));
export function initPrestColor(colors: string[]) {
  PrestColorPool.value = new ColorPool(colors);
}
