/* 常用日期、时间方法  export 对外模块封装 */

import moment from 'moment';

const formatYMD = 'YYYY-MM-DD';
const formatHMS = 'HH:mm:ss';
const format = {
    m: 'mm',
    hm: 'HH:mm',
    hms: 'HH:mm:ss',
    ymd: 'YYYY-MM-DD',
    ymdhm: 'YYYY-MM-DD HH:mm',
    ymdhms: 'YYYY-MM-DD HH:mm:ss',
    Y: 'YYYY',
    M: 'MM',
    D: 'DD',
    ymCn: 'YYYY年MM月',
    ymdCn: 'YYYY年MM月DD日',
    mdCn: 'MM月DD日',
};

/**
 * 创建新日期
 * @param {String} value 年月日字符串
 * @return {Date} Date 返回一个 ymd 的 Date格式，不传参数得到当前Date
 */
export function getNewDate(value) {
    return moment(value)
};

/**
 * 获取分钟
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 hh:mm 格式的字符串，如果不传参数得到当前时间的时分秒
 */
export function getM(value) {
    return moment(value)
        .format(format.m);
};

/**
 * 获取年份
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 hh:mm 格式的字符串，如果不传参数得到当前时间的时分秒
 */
export function getYear(value) {
    return moment(value)
        .format(format.Y);
};

/**
 * 获取月份
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 hh:mm 格式的字符串，如果不传参数得到当前时间的时分秒
 */
export function getMonth(value) {
    return moment(value)
        .format(format.M);
};

/**
 * 获取日期
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 hh:mm 格式的字符串，如果不传参数得到当前时间的时分秒
 */
export function getDay(value) {
    return moment(value)
        .format(format.D);
};

/**
 * 获取时分
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 hh:mm 格式的字符串，如果不传参数得到当前时间的时分秒
 */
export function getHM(value) {
    return moment(value)
        .format(format.hm);
};

/**
 * 获取时间的时分秒
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 hh:mm:ss 格式的字符串，如果不传参数得到当前时间的时分秒
 */
export function getHMS(value) {
    return moment(value)
        .format(format.hms);
};

/**
 * 获取年月日
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 yyyy-mm-dd 格式的字符串，如果不传参数，默认今天
 */
export function getYMD(value) {
    return moment(value)
        .format(format.ymd);
};

/**
 * 获取年月日时分
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 yyyy-mm-dd hh:mm 格式的字符串，如果不传参数，默认今天
 */
export function getYMDHM(value) {
    return moment(value)
        .format(format.ymdhm);
};

/**
 * 获取年月日时分秒
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 yyyy-mm-dd hh:mm:ss 格式的字符串，如果不传参数，默认今天
 */
export function getYMDHMS(value) {
    return moment(value)
        .format(format.ymdhms);
};

/**
 * 获取年月日中文展示
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 yyyy年mm月dd日 格式的字符串，如果不传参数，默认今天
 */
export function getCnYMD(value) {
    return moment(value)
        .format(format.ymdCn);
};

/**
 * 获取年月中文展示
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 yyyy年mm月 格式的字符串，如果不传参数，默认今天
 */
export function getCnYM(value) {
    return moment(value)
        .format(format.ymCn);
};

/**
 * 获取年月中文展示
 * @param {String | Date | null} value 格式化的年月日时分秒字符串 | 日期 | null
 * @return {String} string 返回 mm月dd日 格式的字符串，如果不传参数，默认今天
 */
export function getCnMD(value) {
    return moment(value)
        .format(format.mdCn);
};


export function getAfterDays(startDate, days) {
    return moment(startDate)
        .add(days, 'days')
        .format(format.ymd);
};

export function getBeforeDays(startDate, days) {
    return moment(startDate)
        .subtract(days, 'days')
        .format(format.ymd);
};

export function getAfterMinute(start, minute) {
    return moment(start)
        .add(minute, 'minute')
        .format(format.ymdhms);
};

export function getBeforeMinute(start, minute) {
    return moment(start)
        .subtract(minute, 'minute')
        .format(format.ymdhms);
};

/**
 * 时间差
 * @param  {[type]} start [description]
 * @param  {[type]} end   [description]
 * @return {Number} string  时差，天数
 */
export function dateDiffer(start, end, type = 'days') {
    const s = getNewDate(start);
    const e = getNewDate(end);
    let d;
    if (type == 'days') {
        d = Math.ceil((e - s) / (24 * 60 * 60 * 1000));
    };
    if (type == 'hours') {
        d = (e - s) / (60 * 60 * 1000);
    };
    if (type == 'minute') {
        d = (e - s) / (60 * 1000);
    };
    if (type == 'second') {
        d = (e - s) / 1000;
    };
    return d;
};

/**
 * 时间加法
 * @param  {[type]} start [description]
 * @param  {[type]} hours   [description]
 * @return {string} 返回 yyyy-mm-dd hh:mm:ss 格式的字符串
 */
export function getAfterHours(start, hours) {
    return moment(start)
        .add(hours, 'hours')
        .format(format.ymdhms);
};

/**
 * 时间减法
 * @param  {[type]} start [description]
 * @param  {[type]} hours   [description]
 * @return {string} 返回 yyyy-mm-dd hh:mm:ss 格式的字符串
 */
export function getBeforeHours(start, hours) {
    return moment(start)
        .subtract(hours, 'hours')
        .format(format.ymdhms);
};

/**
 * 时间范围是否正确
 * @param  {[type]} start [description]
 * @param  {[type]} end   [description]
 * @return {Boolean} true: 开始时间在结束时间之前
 */
export function isDateBefore(start, end) {
    return moment(start)
        .isBefore(end);
};

/**
 * [day description]
 * @return {[number]} [返回当天是周几]
 */
export function day() {
    return moment()
        .day();
};

/**
 * 根据传入类型获取时间段
 * @param  {type}   0-今天 1-昨天 2-本周 3-本月 4-过去7天 5-过去30天
 * @return {Object} {startTime,endTime}  年-月-日 时-分
 */
export function dateSegment(type) {
    let startTime, endTime,
        _today = getYMD(), //当前日期
        _year = _today.split('-')[0], //年
        _month = _today.split('-')[1], //月
        _date = _today.split('-')[2], //日
        _week = day(); //周几
    if (type == 0) {
        startTime = _today + ' 00:00';
        endTime = _today + ' 23:59';
    };
    if (type == 1) {
        startTime = `${getBeforeDays(_today,1)} 00:00`;
        endTime = `${getBeforeDays(_today,1)} 23:59`;
    };
    if (type == 2) {
        startTime = `${getBeforeDays(_today,_week-1)} 00:00`;
        endTime = _week > 1 ? `${getBeforeDays(_today,1)} 23:59` : _today + ' 23:59';
    };
    if (type == 3) {
        startTime = `${_year}-${_month}-01 00:00`;
        endTime = _date > 1 ? `${getBeforeDays(_today,1)} 23:59` : `${_year}-${_month}-01 23:59`;
    };
    if (type == 4) {
        startTime = `${getBeforeDays(_today,7)} 00:00`;
        endTime = `${getBeforeDays(_today,1)} 23:59`;
    };
    if (type == 5) {
        startTime = `${getBeforeDays(_today,30)} 00:00`;
        endTime = `${getBeforeDays(_today,1)} 23:59`;
    };
    return {
        startTime,
        endTime
    };
};
