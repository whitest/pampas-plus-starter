/* 核心 controller */
import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../../core/core.js';

import moment from 'moment';

class myController {
    constructor($scope, $timeout, $document, ComponentDateTimePickerFactory) {
        'ngInject';

        // 选择
        const picker = {
            date: () => {
                $scope.picker($scope.date);
                $scope.close();
            },
            month: () => {
                $scope.picker(`${$scope.year}-${$scope.month<10?$scope.month:$scope.month}`);
                $scope.close();
            },
            time: () => $scope.picker(`${$scope.hour}:${$scope.minute}`),
            dateTime: () => {
                if (!$scope.date) {
                    $scope.chooseDateEvent({
                        ymd: moment()
                            .format('YYYY-MM-DD'),
                    });
                    return; // chooseDateEvent 自带 picker方法
                };
                $scope.picker(`${$scope.date} ${$scope.hour}:${$scope.minute}`)
            },
        };

        // 设置初始化的日期范围
        const setInitArea = () => {
            if ('date' != $scope.type && 'dateTime' != $scope.type) return;
            if (!$scope.setInitAreaStart || !$scope.setInitAreaEnd) return;
            let start = $scope.setInitAreaStart;
            let end = $scope.setInitAreaEnd;
            angular.forEach($scope.dateElem, el => {
                angular.forEach(el, (ele, index) => {
                    // if (!!ele.limit) return;
                    if ('object' !== typeof(ele)) return;
                    // ele.isInitArea = (verification.isDateArea(start, index) && verification.isDateArea(index, end)) ? true : false;
                    ele.isInitArea = (moment(start)
                        .isBefore(index) && moment(index)
                        .isBefore(end)) ? true : false;
                });
            });
        };

        // 日历的位置


        const c = new tools.calendar();
        $scope.daysname = ['日', '一', '二', '三', '四', '五', '六'];

        // 初始化年月日
        $scope.year = c.year;
        $scope.month = moment()
            .month(c.month)
            .format('MM');
        $scope.dateElem = c.monthElems();
        $scope.yearList = c.yearElems();
        $scope.monthList = c.monthTable();

        // 更换不同的table事件
        // params: type = 'year' | 'month' | 'date'
        $scope.changeTable = (type) => $scope.tableType = type;
        // 年份table的翻页事件
        $scope.yearTablePrev = () => {
            c.yearTablePrev();
            $scope.yearList = c.yearElems();
        };
        $scope.yearTableNext = () => {
            c.yearTableNext();
            $scope.yearList = c.yearElems();
        };
        // 日期的翻页事件
        $scope.dateTablePrev = () => {
            c.prev();
            $scope.year = c.year;
            $scope.month = moment()
                .month(c.month)
                .format('MM');
            $scope.dateElem = c.monthElems();
            const t = $timeout(() => {
                setInitArea();
                $timeout.cancel(t);
            }, 0);
        };
        $scope.dateTableNext = () => {
            c.next();
            $scope.year = c.year;
            $scope.month = moment()
                .month(c.month)
                .format('MM');
            $scope.dateElem = c.monthElems();
            const t = $timeout(() => {
                setInitArea();
                $timeout.cancel(t);
            }, 0);
        };
        // 选择某一年份
        $scope.chooseYearEvent = (y) => {
            $scope.year = c.year = y;
            c.yearTableFirst = y;
            $scope.dateElem = c.monthElems();
            const t = $timeout(() => {
                setInitArea();
                $timeout.cancel(t);
            }, 0);
            $scope.changeTable('date');
            $scope.yearList = c.yearElems();
        };
        // 选择某一月份
        $scope.chooseMonthEvent = (m) => {
            c.month = m - 1;
            $scope.month = moment()
                .month(c.month)
                .format('MM');
            if ($scope.type == 'month') {
                picker[$scope.type]();
                return;
            }
            $scope.dateElem = c.monthElems();
            const t = $timeout(() => {
                setInitArea();
                $timeout.cancel(t);
            }, 0);
            $scope.changeTable('date');
        };
        // 选择某一天
        $scope.chooseDateEvent = (td) => {
            // if (!!$scope.dateMin && !verification.isDateArea($scope.dateMin, td.ymd)) {
            if (!!$scope.dateMin && moment($scope.dateMin)
                .isAfter(td.ymd)) {
                console.log(`最小可选日期为${$scope.dateMin}`);
                return;
            };
            // if (!!$scope.dateMax && !verification.isDateArea(td.ymd, $scope.dateMax)) {
            if (!!$scope.dateMax && moment(td.ymd)
                .isAfter($scope.dateMax)) {
                console.log(`最大可选日期为${$scope.dateMax}`);
                return;
            };
            ComponentDateTimePickerFactory.clearEvent(td.ymd);
            $scope.date = td.ymd;
            const year = moment(td.ymd)
                .year();
            const month = moment(td.ymd)
                .month();
            $scope.year = year;
            $scope.month = moment()
                .month(month)
                .format('MM');
            $scope.dateElem = c.changeMonthElems(year, month);
            if (!!$scope.endValue) {
                $scope.setInitAreaStart = td.ymd;
            };
            if (!!$scope.startValue) {
                $scope.setInitAreaEnd = td.ymd;
            };
            const t = $timeout(() => {
                setInitArea();
                $timeout.cancel(t);
            }, 0);
            picker[$scope.type]();
        };
        // 日期table 划过事件
        const datesTableMouseOver = {
            // 如果已选中起始日期
            start: (ymd) => {
                angular.forEach($scope.dateElem, el => {
                    angular.forEach(el, (ele, index) => {
                        if (!!ele.limit) return;
                        if ('object' !== typeof(ele)) return;
                        // ele.isArea = verification.isDateArea(index, ymd) ? true : false;
                        ele.isArea = moment(index)
                            .isBefore(ymd) ? true : false;
                    });
                });
            },
            // 如果已选中结束日期
            end: (ymd) => {
                angular.forEach($scope.dateElem, el => {
                    angular.forEach(el, (ele, index) => {
                        if (!!ele.limit) return;
                        if ('object' !== typeof(ele)) return;
                        // ele.isArea = verification.isDateArea(ymd, index) ? true : false;
                        ele.isArea = moment(ymd)
                            .isBefore(index) ? true : false;
                    });
                });
            },
        };
        $scope.datesTableMouseOver = (td) => {
            if (!$scope.startValue && !$scope.endValue) return;
            if ('empty' == $scope.startValue && 'empty' == $scope.endValue) return;
            if (!!$scope.startValue) datesTableMouseOver['start'](td.ymd);
            if (!!$scope.endValue) datesTableMouseOver['end'](td.ymd);
        };

        $scope.$watch('startValue', (val, old) => {
            if (!val) return;
            if (val == 'empty') return;
            $scope.min = val;
            let v = val;
            if ($scope.type == 'dateTime') {
                v = v.split(' ')[0];
            };
            $scope.setInitAreaStart = v;
            $scope.setInitAreaEnd = $scope.date;
            const t = $timeout(() => {
                setInitArea();
                $timeout.cancel(t);
            }, 0);
        });
        $scope.$watch('endValue', (val, old) => {
            if (!val) return;
            if (val == 'empty') return;
            $scope.max = val;
            let v = val;
            if ($scope.type == 'dateTime') {
                v = v.split(' ')[0];
            };
            $scope.setInitAreaEnd = v;
            $scope.setInitAreaStart = $scope.date;
            const t = $timeout(() => {
                setInitArea();
                $timeout.cancel(t);
            }, 0);
        });


        // 时间列表
        const t = tools.timeList;
        const timeInit = $scope.timeInit ? $scope.timeInit.split(':') : ['00', '00'];
        // 初始化时间列表
        $scope.hoursList = t.hours();
        $scope.minutesList = t.minutes({
            least: $scope.timeInterval,
        });
        // 如果当前的type=="time"时，默认展示时、分列表
        // if ($scope.type == 'time') {
        //     $scope.hoursListShow = true;
        //     $scope.minutesListShow = true;
        // };
        // 初始化选中的时间
        $scope.hour = timeInit[0];
        $scope.minute = timeInit[1];
        // 开关时间列表
        $scope.hoursListOpen = (ev) => {
            ev.stopPropagation();
            $scope.hoursListShow = true;
            $scope.minutesListShow = false;
        };
        $scope.minutesListOpen = (ev) => {
            ev.stopPropagation();
            $scope.minutesListShow = true;
            $scope.hoursListShow = false;
        };

        const handler = ev => {
            const o = $timeout(() => {
                $scope.hoursListShow = false;
                $scope.minutesListShow = false;
                $timeout.cancel(o);
            }, 0)
        };
        $document.on('click', handler);
        $scope.$on('$destroy', () => {
            $document.off('click', handler);
        });

        // 选择时间
        $scope.hoursChoose = (h) => {
            $scope.hour = h;
            picker[$scope.type]();
        };
        $scope.minutesChoose = (m) => {
            $scope.minute = m;
            picker[$scope.type]();
        };
        // 初始化
        const init = {
            date: (val) => {
                const d = moment(val);
                $scope.date = d.format('YYYY-MM-DD');
                $scope.year = d.format('YYYY');
                $scope.month = d.format('MM');
                $scope.dateElem = c.changeMonthElems(d.year(), d.month());
            },
            month: (val) => {

            },
            time: (val) => {
                const a = val.split(':');
                $scope.hour = a[0];
                $scope.minute = a[1];
            },
            dateTime: (val) => {
                const d = moment(val);
                $scope.date = d.format('YYYY-MM-DD');
                $scope.year = d.format('YYYY');
                $scope.month = d.format('MM');
                $scope.hour = d.format('HH');
                $scope.minute = d.format('mm');
                $scope.dateElem = c.changeMonthElems(d.year(), d.month());
            },
        };
        const modelWatch = $scope.$watch('model', val => {
            if (!val) return;
            init[$scope.type](val);
            modelWatch();
        });
        // 最小限制
        const min = {
            date: (val) => {
                $scope.dateMin = val;
                $scope.dateElem = c.setMinLimit(val);
            },
            dateTime: (val) => {
                const m = val.split(' ')[0];
                $scope.dateMin = m;
                $scope.dateElem = c.setMinLimit(m);
            },
        };
        const minWatch = $scope.$watch('min', val => {
            if (!val) return;
            min[$scope.type](val);
        });
        // 最大限制
        const max = {
            date: (val) => {
                $scope.dateMax = val;
                $scope.dateElem = c.setMaxLimit(val);
            },
            dateTime: (val) => {
                const m = val.split(' ')[0];
                $scope.dateMax = m;
                $scope.dateElem = c.setMaxLimit(m);
            },
        };
        const maxWatch = $scope.$watch('max', val => {
            if (!val) return;
            max[$scope.type](val);
        });
        // 清空
        const clearResolve = {
            date: () => {
                $scope.date = '';
                $scope.setInitAreaStart = '';
                $scope.setInitAreaEnd = '';
                $scope.dateMin = '';
                $scope.dateMax = '';
                // $scope.startValue = 'empty';
                // $scope.endValue = 'empty';
                c.minLimit = '';
                c.maxLimit = '';
                const today = moment();
                $scope.year = c.year = today.year();
                c.month = today.month();
                $scope.month = moment()
                    .month(c.month)
                    .format('MM');
                const t = $timeout(() => {
                    $scope.dateElem = c.monthElems();
                    setInitArea();
                    $timeout.cancel(t);
                }, 0);
            },
            dateTime: () => {
                clearResolve.date();
            },
            time: () => {},
            month: () => {},
        };

        // 监测是否触发清空事件
        $scope.$watch('model', (val, old) => {
            if (!val && !!old) {
                clearResolve[$scope.type]();
            }
        })
        // $scope.clear = () => {
        //     ComponentDateTimePickerFactory.clearEvent();
        //     $scope.clearResolve[$scope.type]();
        //     $scope.model = '';
        // };

        // $scope.$watch(ComponentDateTimePickerFactory.clear, val => {
        //     if (!!val) return;
        //     clearResolve[$scope.type]();
        // });

    };
};
export default myController;
