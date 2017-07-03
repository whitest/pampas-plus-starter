/* 验证是否是座机号  export 对外模块封装 */

export default function(val) {
    var re = /^0\d{2,3}-?\d{7,8}$/;
    if (re.test(val)) {
        return true;
    } else {
        return false;
    }
};
