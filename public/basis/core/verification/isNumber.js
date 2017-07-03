/* 验证是否为数字（正整数或小数）  export 对外模块封装 */


export default function(val) {
    if(isNaN(val)) return false; // NaN
    if (!(/^\d+(\.\d+)?$/gi)
        .test(val)) {
        return false;
    }
    return true;
};
