/* 是否为正整数  export 对外模块封装 */

export default function(val) {
    if(isNaN(val)) return false; // NaN
    if (!(/^[0-9]*[1-9][0-9]*$/gi).test(val)) {
        return false;
    }
    return true;
};
