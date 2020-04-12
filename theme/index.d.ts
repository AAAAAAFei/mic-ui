interface IShadow {
    shadowColor: string,
    shadowOffset: { height: number },
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number,
}

interface Variables {
    /**
     * Primary 品牌色
     */
    color_primary: string,
    // Primary_Text 文字按钮色
    color_primary_text: string,
    // Primary_Press 按钮点击
    color_primary_press: string,
    // Primary_Disable 按钮失效
    color_primary_disable: string,
    // Primary_Selected 标签选中填充色
    color_primary_selected: string,
    // Text_Selected 标签选中文字
    color_text_selected: string,
    // Warning 警示颜色/价格颜色
    color_warning: string,
    // Success 成功/安全
    color_success: string,
    // Link 链接色
    color_link: string,
    // Background_Notice 提示底色
    color_background_notice: string,
    // Background_Warning 警告底色
    color_background_warning: string,
    // Text_Title 标题
    color_text_title: string,
    // Text_Body 正文
    color_text_body: string,
    // Text_Caption 辅助文字
    color_text_caption: string,
    // Text_Hint 预输入文字/模块分割线
    color_text_hint: string,
    // Line_B 分割线（B端）
    color_line_b: string,
    // Line_C 分割线（C端）
    color_line_c: string,
    // Press press
    color_press: string,
    // Background_Page 页面背景色
    color_background_page: string,
    // Background_Block 区块/组件/占位符 背景色
    color_background_block: string,
    // White 纯白色
    color_white: string,
    // Text_Anti 反白文字
    color_text_anti: string,
    // Mask 蒙层
    color_mask: string,

    // 圆角
    border_radius: number,
    // 边框
    border_width: number,
    // 触发类阴影
    shadow_trigger: IShadow,
    // 非触发类阴影
    shadow_none_trigger: IShadow,

    /* icon */
    icon_uri_angleRight: string,
    icon_uri_angleDown: string,
    icon_uri_angleUp: string,
    icon_uri_caretDown: string,
    icon_uri_caretUp: string,
    icon_uri_filter: string,
    icon_uri_check: string,
    icon_uri_circle: string,
    icon_uri_circleDisabled: string,
    icon_uri_dotCircle: string,
    icon_uri_dotCircleDisabled: string,
    icon_uri_search: string,
    icon_uri_heart: string,
    icon_uri_closeCircle: string,
    icon_uri_checkCircle: string,
    icon_uri_keyboard: string,
    icon_uri_voice: string,
    icon_uri_emoji: string,
    icon_uri_more: string,
    icon_uri_heartO: string,
    icon_uri_messageO: string,
    icon_uri_visual: string,
    icon_uri_unvisual: string,
    icon_uri_scan: string,
    icon_uri_close: string,
    icon_uri_plus: string,
    icon_uri_warning: string,

    /* toast */
    toast_color_body: string,

    /* tip */
    tip_color_body: number,
}

declare function theme<T extends keyof Variables>(name: T): Variables[T];
declare function theme<T extends keyof Variables>(name: T, value?: Variables[T]): void;

export default theme;
