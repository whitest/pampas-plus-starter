/* 日历相关  export 对外模块封装 */

import moment from 'moment';

class calendar {
    constructor() {
        this.date = moment();
        this.month = moment()
            .month();
        this.year = moment()
            .year();
        this.yearTableFirst = moment()
            .year(); //  year table 第一个元素的值
        this.start = '';
        this.end = '';
    };
    /**
     *  当月第一天
     *  @return {number} day [星期几]
     */
    firstDay() {
        return moment({
                y: this.year,
                M: this.month,
            })
            .day();
    };
    /**
     *  日历行数
     *  @return {number} number [日历行数]
     */
    trLen() {
        return Math.ceil((moment({
                y: this.year,
                M: this.month,
            })
            .daysInMonth() + this.firstDay()) / 7);
    };
    /**
     *  上一个月事件
     *  @param {string} args [周几，代码层面，0为周日,实际支持0-6]
     *  @return {array} monthElems [日历元素]
     */
    prev(args) {
        const weekNum = (args - 0) || 0;
        const last = moment({
                y: this.year,
                M: this.month,
            })
            .subtract(1, 'months');
        this.year = last.year();
        this.month = last.month();
        return this.monthElems(args);
    };
    /**
     *  下一个月事件
     *  @param {string} args [周几，代码层面，0为周日,实际支持0-6]
     *  @return {array} monthElems [日历元素]
     */
    next(args) {
        const weekNum = (args - 0) || 0;
        const next = moment({
                y: this.year,
                M: this.month,
            })
            .add(1, 'months');
        this.year = next.year();
        this.month = next.month();
        return this.monthElems(args);
    };
    /**
     * 标记日期是否超过可选日期范围
     * 比如日历小于或大于某一天时不可选
     * @param {string} ymd [ymd字符串格式，如'2016-12-27']
     * @return {boolean} b [false：未超过，true：已超出]
     */
    checkLimit(ymd) {
        if (!this.minLimit && !this.maxLimit) return false;
        if (!!this.minLimit && moment(ymd)
            .isBefore(this.minLimit)) return true;
        if (!!this.maxLimit && moment(ymd)
            .isAfter(this.maxLimit)) return true;
        return false;
    };
    /**
     * 日历table每一天 月维度
     * @return {array} l [日历月维度数组]
     */
    monthElems(args) {
        const weekNum = (args - 0) || 0;
        const l = [];
        const today = moment()
            .format('YYYY-MM-DD');
        const that = this;
        const trLen = this.trLen()
        let e = 1,
            f = this.firstDay(),
            ymd = moment({
                y: this.year,
                M: this.month,
                d: 1,
            })
            .add(weekNum - f, 'days')
            .format('YYYY-MM-DD');
        for (let i = 0; i < trLen; i++) {
            l[i] = {};
            for (let j = 0; j < 7; j++) {
                if (i == 0 && j == 0) {
                    this.start = ymd;
                };
                if (i == trLen - 1 && j == 6) {
                    this.end = ymd;
                };
                l[i][ymd] = {
                    day: moment(ymd)
                        .date(),
                    month: moment(ymd)
                        .isBefore({
                            Y: this.year,
                            M: this.month,
                        }, 'month') ? 'p' : (moment(ymd)
                            .isAfter({
                                Y: this.year,
                                M: this.month,
                            }, 'month') ? 'n' : 't'),
                    ymd: ymd,
                    limit: this.checkLimit(ymd),
                    today: ymd === today ? true : false,
                };
                ymd = moment(ymd)
                    .add(1, 'days')
                    .format('YYYY-MM-DD');
            };
        };
        return l;
    };
    /**
     *  日历周维度初始化，table 每一天
     *  @param {string} args [周几，代码层面，0为周日,实际支持0-6]
     *  @return {array} list [周维度日历元素]
     */
    weekElems(args) {
        const weekNum = (args - 0) || 0;
        const today = moment()
            .format('YYYY-MM-DD');
        const selfDate = moment({
            day: 1
        });
        const targetDate = moment({
            year: this.year,
            month: this.month
        });
        const targetDay = moment(selfDate)
            .isSame(targetDate) ? moment() : targetDate;
        const weekday = targetDay.day();
        let ymd = moment(targetDay)
            .add(weekNum - weekday, 'days')
            .format('YYYY-MM-DD');
        const list = [];
        for (let i = 0; i < 7; i++) {
            list[i] = {
                day: moment(ymd)
                    .date(),
                ymd: ymd,
                today: today === ymd ? true : false,
            };
            ymd = moment(ymd)
                .add(1, 'days')
                .format('YYYY-MM-DD');
        };
        this.weekElemsList = list;
        return list;
    };
    /**
     *  周历表 向前翻页
     *  @return {array} list [周维度日历元素]
     */
    weekTablePrev() {
        const list = this.weekElemsList;
        const today = moment()
            .format('YYYY-MM-DD');
        for (let i = 0; i < list.length; i++) {
            const ymd = moment(list[i].ymd)
                .subtract(7, 'days')
                .format('YYYY-MM-DD');
            list[i] = {
                ymd: ymd,
                day: moment(ymd)
                    .date(),
                today: today === ymd ? true : false,
            };
        };
        this.weekElemsList = list;
        return list;
    };
    /**
     *  周历表 向后翻页
     *  @return {array} list [周维度日历元素]
     */
    weekTableNext() {
        const list = this.weekElemsList;
        const today = moment()
            .format('YYYY-MM-DD');
        for (let i = 0; i < list.length; i++) {
            const ymd = moment(list[i].ymd)
                .add(7, 'days')
                .format('YYYY-MM-DD');
            list[i] = {
                ymd: ymd,
                day: moment(ymd)
                    .date(),
                today: today === ymd ? true : false,
            };
        };
        this.weekElemsList = list;
        return list;
    };
    /**
     *  日历年维度
     *  @return {array} a [年的二维数组]
     */
    yearElems() {
        let a = [],
            y = this.yearTableFirst;
        for (let j = 0; j < 4; j++) {
            let b = [];
            for (let i = 0; i < 3; i++) {
                b.push(y++);
            };
            a.push(b);
        };
        return a;
    };
    /**
     *  日历年维度向前翻页
     */
    yearTablePrev() {
        this.yearTableFirst -= 12;
        this.yearElems();
    };
    /**
     *  日历年维度向后翻页
     */
    yearTableNext() {
        this.yearTableFirst += 12;
        this.yearElems();
    };
    /**
     *  日历月维度
     *  @return {array} array [月的二维数组]
     */
    monthTable() {
        return [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12],
        ];
    };
    /**
     *  切换某年某月的日历table
     *  @param {string} y [年份]
     *  @param {string} m [月份，代码层面，0为第一月]
     *  @param {string} args [周几，代码层面，0为周日,实际支持0-6]
     *  @return {array} monthElems
     */
    changeMonthElems(y, m ,args) {
        this.year = y;
        this.month = m;
        return this.monthElems(args);
    };
    /**
     *  初始化最小日期期限
     *  @param {string} ymd [yyyy-mm-dd格式字符串]
     *  @return {array} monthElems
     */
    setMinLimit(ymd) {
        this.minLimit = ymd;
        return this.monthElems();
    };
    /**
     *  初始化最大日期期限
     *  @param {string} ymd [yyyy-mm-dd格式字符串]
     *  @return {array} monthElems
     */
    setMaxLimit(ymd) {
        this.maxLimit = ymd;
        return this.monthElems();
    };
};

export default calendar;
