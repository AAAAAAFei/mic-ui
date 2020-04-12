import { colorToRgba } from './colorUtil';

export default {
    common: {
        // Primary 品牌色
        color_primary: '#ff571a',
        // Primary_Text 文字按钮色
        color_primary_text: '#ff571a',
        // Primary_Press 按钮点击
        color_primary_press: '#e54e17',
        // Primary_Disable 按钮失效
        color_primary_disable: '#ff9a76',
        // Primary_Selected 标签选中填充色
        color_primary_selected: '#ffeee8',
        // Text_Selected 标签选中文字
        color_text_selected: '#ff571a',
        // Warning 警示颜色/价格颜色
        color_warning: '#ff4040',
        // Success 成功/安全
        color_success: '#1dbf6e',
        // Link 链接色
        color_link: '#4da6ff',
        // Background_Notice 提示底色
        color_background_notice: '#fff2bd',
        // Background_Warning 警告底色
        color_background_warning: '#fff1f0',
        // Text_Title 标题
        color_text_title: '#1b1c33',
        // Text_Body 正文
        color_text_body: '#5e5e66',
        // Text_Caption 辅助文字
        color_text_caption: '#8d8e99',
        // Text_Hint 预输入文字/模块分割线
        color_text_hint: '#b0b1b8',
        // Line_B 分割线（B端）
        color_line_b: '#d7d7db',
        // Line_C 分割线（C端）
        color_line_c: '#ededf0',
        // Press press
        color_press: '#e3e3e6',
        // Background_Page 页面背景色
        color_background_page: '#f2f3f5',
        // Background_Block 区块/组件/占位符 背景色
        color_background_block: '#f7f8fa',
        // White 纯白色
        color_white: '#ffffff',
        // Text_Anti 反白文字
        color_text_anti: '#ffffff',
        // Mask 蒙层
        color_mask: 'rgba(0, 0, 0, 0.75)',

        // 圆角
        border_radius: 4,
        // 边框
        border_width: 1,
        // 触发类阴影
        shadow_trigger: {
            shadowColor: '#000000',
            shadowOffset: { height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 20,
        },
        // 非触发类阴影
        shadow_none_trigger: {
            shadowColor: '#000000',
            shadowOffset: { height: -1 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 20,
        },

        /* icon */
        icon_uri_angleRight: 'https://assets.souche.com/assets/sccimg/common/icon/detail_gray.png',
        icon_uri_angleDown: 'https://assets.souche.com/assets/sccimg/common/icon/dropdown_gray.png',
        icon_uri_angleUp: 'https://assets.souche.com/assets/sccimg/common/icon/up_gray.png',
        icon_uri_caretDown: 'https://assets.souche.com/assets/sccimg/common/icon/dropdownsolid_gray.png?_t=1558324147041',
        icon_uri_caretUp: 'https://assets.souche.com/assets/sccimg/common/icon/upsolid_gray.png?_t=1558324147041',
        icon_uri_filter: 'https://assets.souche.com/assets/sccimg/common/icon/fliter_gray.png?_t=1558324147041',
        icon_uri_check: 'https://assets.souche.com/assets/sccimg/common/icon/listradio_selected_disable.png',
        icon_uri_circle: 'https://assets.souche.com/assets/sccimg/common/icon/multiselect_unselected.png',
        icon_uri_circleDisabled: 'https://assets.souche.com/assets/sccimg/common/icon/multiselect_unselected_disable.png',
        icon_uri_dotCircle: 'https://assets.souche.com/assets/sccimg/common/icon/radiobutton_selected%20.png?_t=1558340519157',
        icon_uri_dotCircleDisabled: 'https://assets.souche.com/assets/sccimg/common/icon/radiobutton_selected_disable.png?_t=1558340519157',
        icon_uri_search: 'https://assets.souche.com/assets/sccimg/common/icon/search_m_gray.png',
        icon_uri_heart: 'https://assets.souche.com/assets/sccimg/common/icon/toastcollection.png',
        icon_uri_closeCircle: 'https://assets.souche.com/assets/sccimg/common/common_button_searchbarclear_normal_3x.png',
        icon_uri_checkCircle: 'https://assets.souche.com/assets/sccimg/common/icon/toastsuccess.png',
        icon_uri_keyboard: 'https://assets.souche.com/assets/sccimg/common/common_button_callkeyboard_3x.png',
        icon_uri_voice: 'https://assets.souche.com/assets/sccimg/common/common_button_callvoice_3x.png',
        icon_uri_emoji: 'https://assets.souche.com/assets/sccimg/common/conmon_button_emoji_3x.png',
        icon_uri_more: 'https://assets.souche.com/assets/sccimg/common/common_button_more_3x.png',
        icon_uri_heartO: 'https://assets.souche.com/assets/sccimg/common/common_button_uncollect_3x.png',
        icon_uri_messageO: 'https://assets.souche.com/assets/sccimg/common/icon/message.png',
        icon_uri_visual: 'https://assets.souche.com/assets/sccimg/common/common_icon_visual_3x.png',
        icon_uri_unvisual: 'https://assets.souche.com/assets/sccimg/common/common_icon_unvisual_3x.png',
        icon_uri_scan: 'https://assets.souche.com/assets/sccimg/common/icon/scan.png',
        icon_uri_close: 'https://assets.souche.com/assets/sccimg/common/common_button_tipclose_m_orange_3x.png',
        icon_uri_plus: 'https://assets.souche.com/assets/sccimg/common/add_z.png',
        icon_uri_warning: 'https://assets.souche.com/assets/sccimg/common/icon/warning.png',
        icon_uri_phone: 'https://assets.souche.com/assets/sccimg/common/icon/phone.png',

        /* toast */
        toast_color_body: colorToRgba('#1b1c33', 0.9),

        /* tip */
        tip_color_body: colorToRgba('#1b1c33', 0.9),
    },
};