/* eslint no-bitwise: 0 */

import normalizeColorRN from './vendor/normalizeColor';
import setNormalizedColorAlphaRN from './vendor/setNormalizedColorAlpha';

/**
 * 以bg为底以alpha为比例降低source饱和度
 * @param {string} source
 * @param {number} alpha
 * @param {string} bg
 *  10进制数字 => 6位数16进制 => 拆分引用算法 => 合并
 */
export function colorPipe(source, alpha, bg) {
    const digitalColor = normalizeColor(source).toString(16);
    const digitalBgColor = normalizeColor(bg).toString(16);
    const rgbColor = '000000'.slice(0,8 - digitalColor.length).concat(digitalColor.slice(0,6));
    const rgbBgColor = '000000'.slice(0,8 - digitalBgColor.length).concat(digitalBgColor.slice(0,6));
    const rgbArray = [0,2,4].map((i) =>Math.floor(((1 - alpha) * `0x${rgbBgColor.slice(i,i + 2)}`) + alpha * `0x${rgbColor.slice(i,i + 2)}`).toString(16));
    const rgbTempArray = rgbArray.map((i) => '00'.slice(0,2 - i.length).concat(i));
    return `#${rgbTempArray.join('')}`;
}

export const normalizeColor = normalizeColorRN;

export const setNormalizedColorAlpha = setNormalizedColorAlphaRN;


export function colorToRgba(input, alpha) {
    var int32Color = normalizeColor(input);
    if (int32Color === null) {
        return input;
    }
    if (alpha < 0) {
        alpha = 0;
    } else if (alpha > 1) {
        alpha = 1;
    }

    int32Color = int32Color || 0;

    var r = (int32Color & 0xff000000) >>> 24;
    var g = (int32Color & 0x00ff0000) >>> 16;
    var b = (int32Color & 0x0000ff00) >>> 8;
    var a = alpha;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * 主色转主色对应的激活颜色
 * @param {string} primaryHex 主色
 * @return {string} 主色对应的激活颜色
 */
export function primaryToPrimaryPressed(primaryHex) {
    let resultHex = '#';
    primaryHex = primaryHex.replace('#', '');
    resultHex += padStart(Math.round(parseInt(primaryHex.substr(0, 2), 16) * 0.898).toString(16));
    resultHex += padStart(Math.round(parseInt(primaryHex.substr(2, 2), 16) * 0.897).toString(16));
    resultHex += padStart(Math.round(parseInt(primaryHex.substr(4, 2), 16) * 0.885).toString(16));
    return resultHex;
}

/**
 * 主色转主色对应的禁用色
 * @param {string} primaryHex 主色
 * @return {string} 主色对应的禁用色
 */
export function primaryToPrimaryDisabled(primaryHex) {
    let resultHex = '#';
    primaryHex = primaryHex.replace('#', '');
    for (let i = 0; i < 6; i += 2) {
        const n = primaryHex.substr(i, 2);
        resultHex += padStart(Math.round(singleColorPipe(parseInt(n, 16), 0.6, 255)).toString(16));
    }
    return resultHex;
}

/**
 * 主色转标签选中填充色
 * @param {string} primaryHex 主色
 * @return {string} 标签选中填充色
 */
export function primaryToPrimarySelected(primaryHex) {
    let resultHex = '#';
    primaryHex = primaryHex.replace('#', '');
    for (let i = 0; i < 6; i += 2) {
        const n = primaryHex.substr(i, 2);
        resultHex += padStart(Math.floor(singleColorPipe(parseInt(n, 16), 0.1, 255)).toString(16));
    }
    return resultHex;
}

function padStart(str) {
    return ('0' + str).slice(-2);
}

/**
 * 原色根据背景色和自身透明度转视觉色
 * @param {number} source 原色
 * @param {number} alpha 透明度
 * @param {number} bg 背景原色
 * @return {number} 转换后的视觉色
 */
function singleColorPipe(source, alpha, bg) {
    return ((1 - alpha) * bg) + alpha * source;
}
