// import { NativeModules } from 'react-native';
// import {
//     primaryToPrimaryPressed,
//     primaryToPrimaryDisabled,
//     primaryToPrimarySelected,
// } from '../util/colorUtil';
// import version from './version';

// const defaultPrimaryColor = '#ff571a';
// const appPrimaryColor = NativeModules.SCCRNAppData &&
//     NativeModules.SCCRNAppData.primaryColor &&
//     NativeModules.SCCRNAppData.primaryColor.toLowerCase() ||
//     defaultPrimaryColor;
// let theme = NativeModules.STheme && NativeModules.STheme.theme; // APP 统一主题

// // 主题版本策略，如果本地主题版本大于 APP 统一主题版本，则不应用 APP 统一主题
// if (theme && version.major > theme.version) {
//     theme = null;
// }

// if (!theme) {
//     // 使用旧版 APP 主色
//     if (appPrimaryColor !== defaultPrimaryColor) {
//         theme = calculateTheme(appPrimaryColor);
//     } else {
//         theme = {};
//     }
// }

// function calculateTheme(primaryColor) {
//     return {
//         color_primary: primaryColor,
//         color_primary_text: primaryColor,
//         color_primary_press: primaryToPrimaryPressed(primaryColor),
//         color_primary_disable: primaryToPrimaryDisabled(primaryColor),
//         color_primary_selected: primaryToPrimarySelected(primaryColor),
//         color_text_selected: primaryColor,
//     };
// }

// export default {
//     vars: {
//         common: theme,
//     },
// };

export default {
    vars: {},
};
