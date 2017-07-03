/* 电话相关  export 对外模块封装 */

/**
 * 格式化手机
 * @param  {string} phone [手机号]
 * @return {string} telephone [格式化的手机号]
 */
export const format = (phone) => {
    if (phone.length !== 11) return phone;
    return `${phone.slice(0,3)}-${phone.slice(3,7)}-${phone.slice(7)}`;
};
