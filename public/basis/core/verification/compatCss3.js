/* 浏览器是否支持css3校验  export 对外模块封装 */

const supportCss3 = (style) => {
    const prefix = ['webkit', 'Moz', 'ms', 'o'],
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function(string) {
            return string.replace(/-(\w)/g, function($0, $1) {
                return $1.toUpperCase();
            });
        };
    for (let i in prefix) {
        humpString.push(_toHumb(prefix[i] + '-' + style));
    };
    humpString.push(_toHumb(style));
    for (let i in humpString) {
        if (humpString[i] in htmlStyle) return true;
    }
    return false;
};


export const animation = supportCss3('animation');
export const transform = supportCss3('transform');
