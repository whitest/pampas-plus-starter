/**
 * 颜色调用模板
 */

/**
 * 可变颜色
 * @type {Object}
 */
export const replaceableTemp = (key, i) => {
    return {
        color: `@include baseThemeColor('${key}', '${i}');`,
        background: `@include baseThemeBgColor('${key}', '${i}');`,
        border: `@include baseThemeBorderColor('${key}', '${i}');`,
        boxShadow: `@include baseThemeBoxShadow('${key}', '${i}', 1, 0 0 0 0);`,
    }
};


/**
 * 固定颜色
 * @type {Object}
 */
export const fixedTemp = (key, i) => {
    return {
        color: `color: map-get(map-get($color-fixed-map, '${key}'), '${i}');`,
        background: `background-color: map-get(map-get($color-fixed-map, '${key}'), '${i}');`,
        border: `border-color: map-get(map-get($color-fixed-map, '${key}'), '${i}');`,
        boxShadow: `box-shadow: 0 0 0 0 rgba(map-get(map-get($color-fixed-map, '${key}'), '${i}'), 1);`,
    };
};


/**
 * 清色级颜色
 * @type {Object}
 */
export const lightTemp = (key, i) => {
    return {
        color: `color: map-get(map-get($color-light-map, '${key}'), '${i}');`,
        background: `background-color: map-get(map-get($color-light-map, '${key}'), '${i}');`,
        border: `border-color: map-get(map-get($color-light-map, '${key}'), '${i}');`,
        boxShadow: `box-shadow: 0 0 0 0 rgba(map-get(map-get($color-light-map, '${key}'), '${i}'), 1);`,
    };
};
