/* 日期、时间验证方法  export 对外模块封装 */

import moment from 'moment';

/**
 * 是否是 hh:mm 的时间格式
 * @param {String} hm 时间字符串
 * @return {Boolean} Boolean
 */
export function isHm(hm) {
    if (!(/^(20|21|22|23|[0-1]\d):[0-5][0-9]$/).test(hm)) return false;
    return true;
};



export function isBefore(start, end) {
    return moment(start)
        .isBefore(end);
}
