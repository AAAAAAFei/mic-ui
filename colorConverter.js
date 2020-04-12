/**
 * 原色根据背景色和自身透明度转视觉色
 * @param {number} source 原色
 * @param {number} alpha 透明度
 * @param {number} bg 背景原色
 * @return {number} 转换后的视觉色
 */
function colorPipe(source, alpha, bg) {
    return ((1 - alpha) * bg) + alpha * source;
}

/**
 * 主色转幽灵按钮禁用色
 * @param {string} primaryHex 主色
 * @return {string} 幽灵按钮禁用色
 */
export function primaryToGhostDisabled(primaryHex) {
    let resultHex = '#';
    primaryHex = primaryHex.replace('#', '');
    for (let i = 0; i < 6; i += 2) {
        const n = primaryHex.substr(i, 2);
        resultHex += padStart(Math.round(colorPipe(parseInt(n, 16), 0.6, 255)).toString(16));
    }
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
        resultHex += padStart(Math.round(colorPipe(parseInt(n, 16), 0.6, 255)).toString(16));
    }
    return resultHex;
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

function padStart(str) {
    return ('0' + str).slice(-2);
}