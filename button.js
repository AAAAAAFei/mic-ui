import React from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import FontSize from './FontSize';
import theme from './theme';
import {
    primaryToGhostDisabled,
    primaryToPrimaryDisabled,
    primaryToPrimaryPressed,
} from './colorConverter';
import Icon from './Icon';
import { colorToRgba } from './theme/colorUtil';

const sizeHeightMap = {
    mini: 24,
    middle: 32,
    large: 40,
};
const sizeFontSizeMap = {
    mini: FontSize.P3,
    middle: FontSize.P2,
    large: FontSize.P1,
};

class Button extends React.PureComponent {
    constructor(props) {
        super(props);

        this.makeStyle(props);
    }

    componentWillReceiveProps(nextProps) {
        this.makeStyle(nextProps);
    }

    makeStyle(props) {
        let {
            type,
            disabled,
            color,
            pressedColor,
            ghostDisabledColor,
            primaryDisabledColor,
        } = props;

        // 如果是自定义主色，则根据主色填充未定义的其它自定义颜色
        if (color) {
            pressedColor = pressedColor || primaryToPrimaryPressed(color);
            ghostDisabledColor = ghostDisabledColor || primaryToGhostDisabled(color);
            primaryDisabledColor = primaryDisabledColor || primaryToPrimaryDisabled(color);
        }

        // 在 styles 中定义了所有状态的样式，这里通过 type 和 disabled 构造样式名称
        let viewStyleName = type, textStyleName = type;
        if (disabled) {
            viewStyleName += 'Disabled';
            textStyleName += 'Disabled';
        }
        viewStyleName += 'View';
        textStyleName += 'Text';
        this.viewStyle = {...StyleSheet.flatten(styles[viewStyleName])};
        this.textStyle = {...StyleSheet.flatten(styles[textStyleName])};
        this.pressedViewStyle = {...StyleSheet.flatten(styles[`${type}PressView`])};
        this.pressedTextStyle = {...StyleSheet.flatten(styles[`${type}PressText`])};

        // 如果有自定义颜色，使用自定义颜色覆盖默然样式
        if (disabled) {
            // 禁用状态样式的覆盖
            if (type === 'ghost' && ghostDisabledColor) {
                this.viewStyle.borderColor = this.textStyle.color = ghostDisabledColor;
            } else if (type === 'primary' && primaryDisabledColor) {
                this.viewStyle.borderColor = this.viewStyle.backgroundColor = primaryDisabledColor;
            }
        } else {
            // 非禁用状态样式的覆盖
            if (type === 'ghost' && color) {
                this.viewStyle.borderColor = this.textStyle.color = color;
            } else if (type === 'primary' && color) {
                this.viewStyle.borderColor = this.viewStyle.backgroundColor = color;
            }
        }
        // 按下状态样式的覆盖
        if (type === 'ghost' && color) {
            this.pressedViewStyle.borderColor = this.pressedViewStyle.backgroundColor = color;
        } else if (type === 'primary' && pressedColor) {
            this.pressedViewStyle.borderColor = this.pressedViewStyle.backgroundColor = pressedColor;
        }
    }

    onPress = () => {
        this.props.onPress && this.props.onPress();
    }

    onPressIn = () => {
        // 为了提高性能，没有使用 re-render 方式，而是直接修改 UI 属性，类似浏览器里直接操作 DOM
        this.manualUpdateStyle(this.pressedViewStyle, this.pressedTextStyle);

        this.props.onPressIn && this.props.onPressIn();
    }

    onPressOut = () => {
        // 同 onPressIn
        this.manualUpdateStyle(this.viewStyle, this.textStyle);

        this.props.onPressOut && this.props.onPressOut();
    }

    manualUpdateStyle(viewStyle, textStyle) {
        this.button && this.button.setNativeProps({
            style: viewStyle
        });
        this.icon && this.icon.setNativeProps({
            style: {
                tintColor: textStyle.color
            }
        });
        this.buttonText && this.buttonText.setNativeProps({
            style: textStyle
        });
    }

    calcRoundStyle(size) {
        const {
            round,
            style,
        } = this.props;

        if (!round) {
            return null;
        }

        let height = sizeHeightMap[size]; // 默认高度
        const flattenStyle = StyleSheet.flatten(style);

        if (flattenStyle && flattenStyle.height) {
            height = flattenStyle.height; // 自定义高度
        }

        return {
            borderRadius: height / 2,
        };
    }

    renderInnerButton(size) {
        const {
            children,
            disabled,
            iconInline,
            style: styleProp,
            textStyle: textStyleProp,
        } = this.props;
        const height = sizeHeightMap[size];
        const fontSize = sizeFontSizeMap[size];
        let icon = this.props.icon;

        const viewStyle = this.viewStyle, textStyle = this.textStyle;
        const roundStyle = this.calcRoundStyle(size);

        // 保持图标的尺寸与颜色属性和文字一致
        const textColor = textStyle.color;
        if (typeof icon === 'string') {
            icon = <Icon ref={(c) => { this.icon = c; }} type={icon} size={fontSize} color={textColor} />;
        }

        return (
            <TouchableWithoutFeedback
                delayPressIn={0}
                disabled={disabled}
                onPress={this.onPress}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
            >
                <View
                    ref={(c) => { this.button = c; }}
                    style={[
                        styles.container,
                        { height },
                        viewStyle,
                        roundStyle,
                        styleProp,
                    ]}
                >
                    <View style={[styles.button, !iconInline && styles.iconBlockButton]}>
                        {icon && icon}
                        <Text
                            ref={(c) => { this.buttonText = c; }}
                            style={[
                                { fontSize },
                                icon ? (iconInline ? styles.span : styles.divide) : false,
                                textStyle,
                                textStyleProp,
                            ]}
                        >{children}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        const size = this.props.size || (this.props.inline ? 'middle' : 'large');
        if (this.props.inline) {
            // 通过包裹一层 View 让按钮不占满容器宽度
            return <View style={styles.wrapper}>{this.renderInnerButton(size)}</View>;
        } else {
            return this.renderInnerButton(size);
        }
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(['normal', 'primary', 'ghost', 'gray']),
    inline: PropTypes.bool,
    size: PropTypes.oneOf(['mini', 'middle', 'large']),
    round: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    iconInline: PropTypes.bool,
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    color: PropTypes.string,
    pressedColor: PropTypes.string,
    ghostDisabledColor: PropTypes.string,
    primaryDisabledColor: PropTypes.string,
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
};

Button.defaultProps = {
    type: 'normal',
    inline: false,
    round: false,
    disabled: false,
    iconInline: true,
};

const PRIMARY_COLOR = theme('color_primary');
const ANTI_WHITE_COLOR = theme('color_text_anti');

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        borderWidth: theme('border_width'),
        borderRadius: theme('border_radius'),
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBlockButton: {
        flexDirection: 'column',
    },
    divide: {
        marginTop: 6,
    },
    span: {
        marginLeft: 8,
    },
    /* eslint-disable react-native/no-unused-styles */
    normalView: {
        backgroundColor: theme('color_white'),
        borderColor: theme('color_line_b'),
    },
    ghostView: {
        backgroundColor: 'transparent',
        borderColor: PRIMARY_COLOR,
    },
    primaryView: {
        backgroundColor: PRIMARY_COLOR,
        borderColor: PRIMARY_COLOR,
    },
    grayView: {
        backgroundColor: theme('color_background_page'),
        borderColor: theme('color_background_page'),
    },
    normalPressView: {
        backgroundColor: theme('color_press'),
        borderColor: theme('color_line_b'),
    },
    ghostPressView: {
        backgroundColor: PRIMARY_COLOR,
        borderColor: PRIMARY_COLOR,
    },
    primaryPressView: {
        backgroundColor: theme('color_primary_press'),
        borderColor: theme('color_primary_press'),
    },
    grayPressView: {
        backgroundColor: theme('color_press'),
        borderColor: theme('color_press'),
    },
    normalDisabledView: {
        backgroundColor: theme('color_white'),
        borderColor: theme('color_line_b'),
    },
    ghostDisabledView: {
        backgroundColor: theme('color_white'),
        borderColor: theme('color_primary_disable'),
    },
    primaryDisabledView: {
        backgroundColor: theme('color_primary_disable'),
        borderColor: theme('color_primary_disable'),
    },
    grayDisabledView: {
        backgroundColor: theme('color_background_page'),
        borderColor: theme('color_background_page'),
    },
    normalText: {
        color: theme('color_text_title'),
    },
    ghostText: {
        color: PRIMARY_COLOR,
    },
    primaryText: {
        color: ANTI_WHITE_COLOR,
    },
    grayText: {
        color: theme('color_text_title'),
    },
    normalPressText: {
        color: theme('color_text_title'),
    },
    ghostPressText: {
        color: ANTI_WHITE_COLOR,
    },
    primaryPressText: {
        color: ANTI_WHITE_COLOR,
    },
    grayPressText: {
        color: theme('color_text_title'),
    },
    normalDisabledText: {
        color: theme('color_line_b'),
    },
    ghostDisabledText: {
        color: theme('color_primary_disable'),
    },
    primaryDisabledText: {
        color: colorToRgba(ANTI_WHITE_COLOR, 0.4),
    },
    grayDisabledText: {
        color: theme('color_line_b'),
    },
    /* eslint-enable react-native/no-unused-styles */
});

export default Button;