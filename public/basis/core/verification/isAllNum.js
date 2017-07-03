/* 验证是否为数字（包含0和负数）  export 对外模块封装 */
export default function(val) {
    if(isNaN(val)) return false; // NaN
    if (!(/^-?(\d+(\.\d+)?)$/gi)
        .test(val)) {
        return false;
    }
    return true;
};
