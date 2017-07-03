/* 验证对象是否为手机号  export 对外模块封装 */

const isTel = (tel) => {
    if (!(/^1\d{10}$/gi)
        .test(tel)) {
        return false;
    }
    return true;
};

export default isTel;
