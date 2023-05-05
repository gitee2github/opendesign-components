import { ExtractPropTypes } from 'vue';

export const figureProps = {
  /**
   * 地址
   */
  src: {
    type: String,
  },
  /**
   * 长宽比
   */
  ratio: {
    type: Number,
  },
  /**
   * img alt
   */
  alt: {
    type: String,
  },
  /**
   * 使用背景
   */
  background: {
    type: Boolean,
  },
  /**
   * 可hover
   */
  hoverable: {
    type: Boolean,
  },
  /**
   * 链接跳转
   */
  href: {
    type: String,
  },
  /**
   * 预置随机多彩背景
   */
  colorful: {
    type: Boolean,
  },
};

export type FigurePropsT = ExtractPropTypes<typeof figureProps>;
