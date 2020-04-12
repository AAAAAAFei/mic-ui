import * as React from 'react';

export interface IconProps {
    /** 图标类型 */
    type: string,
    /** 尺寸，默认 `md` */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | number,
    /** 颜色 */
    color?: string,
    /** 自定义样式，覆盖默认样式 */
    style?: any;
}
export default class Icon extends React.Component<IconProps> {
    props: IconProps;
}
