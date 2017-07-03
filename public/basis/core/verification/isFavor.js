/* 是否为折扣（小数点后最多1位）  export 对外模块封装 */

export default function(val) {
    if (!(/^\d+(\.\d{1})?$/gi)
        .test(val)) {
        return false;
    }
    return true;
};
