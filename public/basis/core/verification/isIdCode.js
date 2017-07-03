/* 验证是否是身份证号  export 对外模块封装 */


export default function(card) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        return false;
    };
    return true
};
