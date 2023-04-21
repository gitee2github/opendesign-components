import { ExtractPropTypes, PropType } from 'vue';

export const layerProps = {
  /**
   * 控制对话框是否显示
   * v-model
   */
  visible: {
    type: Boolean,
  },
  /**
   * 挂载容器，默认为当前父元素
   */
  wrapper: {
    type: [String, Object] as PropType<string | HTMLElement | null>,
  },
  /**
   * 是否挂载到body
   */
  toBody: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否在隐藏时unmout
   */
  unmountOnHide: {
    type: Boolean,
    default: true,
  },
  /**
   * body自定义class
   */
  mainClass: {
    type: [String, Array] as PropType<string | any[]>,
  },
  /**
   * main过渡名称
   */
  mainTransition: {
    type: String,
    default: 'o-zoom-fade',
  },
  /**
   * mask过渡名称
   */
  maskTransition: {
    type: String,
    default: 'o-fade-in',
  },
  /**
   * 是否需要mask
   */
  mask: {
    type: Boolean,
    default: true,
  },
  /**
   * 点击mask关闭
   */
  maskClose: {
    type: Boolean,
    default: true,
  },
};

export type LayerPropsT = ExtractPropTypes<typeof layerProps>;