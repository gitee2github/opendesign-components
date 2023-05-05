import type { ExtractPropTypes, PropType } from 'vue';
import type { ColorT, SizeT } from '../_shared/global';

export const rateProps = {
  /**
   * 评分数量
   */
  count: {
    type: Number,
    default: 5,
  },
  /**
   * 双向绑定值
   */
  modelValue: {
    type: Number,
  },
  /**
   * 非受控状态时，默认值
   */
  defaultValue: {
    type: Number,
    default: 0,
  },
  /**
   * 尺寸 SizeT
   */
  size: {
    type: String as PropType<SizeT>,
  },
  /**
   * 颜色类型 ColorT
   */
  color: {
    type: String as PropType<ColorT>,
    default: 'normal',
  },
  /**
   * 是否只读
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否支持半选
   */
  allowHalf: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否支持可清空
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * 文字
   */
  labels: {
    type: Array as PropType<Array<string>>,
  },
};

export type RatePropsT = ExtractPropTypes<typeof rateProps>;
