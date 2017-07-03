/* 验证是否只包含英文和数字  export 对外模块封装 */

export default function(str) {
    if (!/^[A-Za-z0-9]+$/.test(str)) return false;
    return true;
};
