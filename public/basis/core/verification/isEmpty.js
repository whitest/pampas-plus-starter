/* 验证是否为空（不包含零）  export 对外模块封装 */

export default function(value) {
    if (value === 0) {
        return false;
    };
    return !value;
};
