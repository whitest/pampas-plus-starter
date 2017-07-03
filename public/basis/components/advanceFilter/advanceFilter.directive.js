/* 高级筛选 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';
import template from './advanceFilter.pug'

/**
 * 注：在 normalList 类型的筛选中，
 * 更多按钮是通过当前 normalList 的高度和父节点的高度去判断，
 * normalList高度 - 父节点的高度 > 一定值，则显示
 */

const myDirective = ($rootScope, ComponentAdvanceFilterFactory, $timeout, ComponentPopalertFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            filterClass: '@', // 私有样式
            filterNav: '=', // 主要筛选树
            filterShow: '=', // 是否展示
            filterTurn: '=?', // 开关，控制filterShow
            filterSuccess: '&', // 筛选后的回调
            filterIgnore: '=', // 隐藏某一筛选项（基本废弃）
            filterTotal: '=?', // 筛选的结果条数
        },
        link: ($scope, elem) => {
            // 选中搜索条件数量
            $scope.onCheckedZoneCount = 0;
            // 选中搜索条件列表
            $scope.onCheckedZoneList = {};
            // 开关
            $scope.filterTurn = () => {
                $scope.filterShow = !$scope.filterShow;
                // 关闭后，清空之前的选项
                if(!$scope.filterShow) {
                    angular.forEach($scope.filterNav, (el, i) => {
                        $scope.onCheckedZoneCancelEvent(i, true);
                    });
                    $scope.filterSuccess();
                };
            };
            /*
             * 清除所有ignore的筛选条件
             * ignore 不做回调
             */
            const watchFilterIgnore = $scope.$watch('filterIgnore', (n, o) => {
                if(!n) return;
                if(!o) return;
                if(n == o) return;
                angular.forEach(n, (el, i) => {
                    // false的 return
                    if(!el) return;
                    // 没有变化的 return
                    if(el == o[i]) return;
                    // 清除这个ignore的条件
                    $scope.onCheckedZoneCancelEvent(i, true);
                });
                // $scope.filterSuccess();
            });
            const watchFilterShow = $scope.$watch('filterShow', (val, old) => {
                // if (val == old) return;
                if(true == val) {
                    const t = $timeout(() => {
                        angular.forEach($scope.filterNav, (el, i) => {
                            if(!el.type || el.type == 'normalList') {
                                if(!document.getElementById(i)) return;
                                const h = document.getElementById(i)
                                    .clientHeight - document.getElementById(i)
                                    .parentNode.clientHeight;
                                if(h > 6) {
                                    el.isMore = true;
                                } else {
                                    el.isMore = false;
                                };
                            };
                        });
                        $timeout.cancel(t);
                    }, 0);
                };
            });
            // 筛选-更多
            $scope.normalListMore = (nav) => {
                nav.normalListShowAll = !nav.normalListShowAll;
            };
            // 筛选-全部
            $scope.normalListChooseAll = (navKey) => {
                $scope.chooseEvent({
                    index: '',
                }, navKey);
            };
            // 选择筛选条件
            $scope.chooseEvent = (r, nav) => {
                if($scope.filterNav[nav].value === r.index) return;
                $scope.filterNav[nav].value = r.index;
                // if ('' === r.index) {
                //     delete($scope.onCheckedZoneList[nav]);
                //     if ($scope.onCheckedZoneCount <= 0) return;
                //     $scope.onCheckedZoneCount--;
                // } else {
                //     if (!$scope.onCheckedZoneList[nav]) {
                //         $scope.onCheckedZoneCount++;
                //     }
                //     $scope.onCheckedZoneList[nav] = r.title;
                // };
                $scope.filterSuccess();
            };
            // 取消筛选条件
            $scope.onCheckedZoneCancelEvent = (k, notResolve) => {
                if($scope.filterNav[k].type == 'dateArea') {
                    angular.forEach($scope.filterNav[k].area, el => {
                        if(!!el.init) {
                            el.value = el.init;
                            return;
                        };
                        el.value = '';
                        el.limitValue = '';
                        if(!!el.clear && angular.isFunction(el.clear)) {
                            el.clear();
                        };
                    });
                } else if($scope.filterNav[k].type == 'date') {
                    if($scope.filterNav[k].clear && angular.isFunction($scope.filterNav[k].clear)) {
                        $scope.filterNav[k].clear();
                    };
                } else {
                    $scope.filterNav[k].value = '';
                };
                // if (!!$scope.onCheckedZoneList[k]) {
                //     delete($scope.onCheckedZoneList[k]);
                //     if ($scope.onCheckedZoneCount <= 0) return;
                //     $scope.onCheckedZoneCount--;
                // };
                if(!!notResolve) return;
                $scope.filterSuccess();
            };
            // 日期条件变更
            $scope.dateChangeEvent = (value, navKey) => {
                // if (!$scope.onCheckedZoneList[navKey]) {
                //     $scope.onCheckedZoneCount++;
                // }
                // value = !!$scope.filterNav[navKey].showKey ? `${$scope.filterNav[navKey].showKey}：${value}` : value;
                // $scope.onCheckedZoneList[navKey] = value;
                $scope.filterSuccess();
            };
            // 范围日期变更
            // keyName: 'start'|'end'; 表示当前选中的是开始或结束
            $scope.dateAreaChangeEvent = (value, navKey, keyName) => {
                // if (!$scope.onCheckedZoneList[navKey]) {
                //     $scope.onCheckedZoneCount++;
                // };
                // let str = '';
                // let a = [];
                // angular.forEach($scope.filterNav[navKey].area, el => {
                //     a.push(el.value || '--');
                // });
                // str = a.join(` ${$scope.filterNav[navKey].centerWords || '至'} `);
                // str = !!$scope.filterNav[navKey].showKey ? `${$scope.filterNav[navKey].showKey}：${str}` : str;
                // $scope.onCheckedZoneList[navKey] = str;
                if('start' == keyName) {
                    $scope.filterNav[navKey].area.end.limitValue = value;
                };
                if('end' == keyName) {
                    $scope.filterNav[navKey].area.start.limitValue = value;
                };
                $scope.filterSuccess();
            };
            // 文本框变更监听
            $scope.textChangeEvent = (nav, key) => {
                let input = nav.value;
                const t = $timeout(() => {
                    if(input == nav.value) {
                        $scope.filterSuccess();
                        // if (!!nav.value) {
                        //     $timeout.cancel(t);
                        //     $scope.onCheckedZoneCount++;
                        //     const value = !!$scope.filterNav[key].showKey ? `${$scope.filterNav[key].showKey}：${nav.value}` : nav.value;
                        //     $scope.onCheckedZoneList[key] = value;
                        // } else {
                        //     $scope.onCheckedZoneCount--;
                        //     delete($scope.onCheckedZoneList[key]);
                        // };
                    };
                    $timeout.cancel(t);
                }, 1000);
            };
            // 手机号文本框变更监听
            $scope.telChangeEvent = (val, key) => {
                if(!val.length) {
                    $scope.filterSuccess();
                    // $scope.onCheckedZoneCount--;
                    // delete($scope.onCheckedZoneList[key]);
                };
                if(11 == val.length) {
                    $scope.filterSuccess();
                    // $scope.onCheckedZoneCount++;
                    // const value = !!$scope.filterNav[key].showKey ? `${$scope.filterNav[key].showKey}：${val}` : val;
                    // $scope.onCheckedZoneList[key] = value;
                };
            };

            // 输入框筛选
            $scope.inputFilterEvent = (nav) => {
                if(!!nav.value && !verification.isInteger(nav.value)) {
                    ComponentPopalertFactory.error('请输入正整数');
                    return;
                };
                $scope.filterSuccess();
            };

            $scope.$on('$destroy', ev => {
                watchFilterShow();
                watchFilterIgnore();
            });
        },

    };
};

export default myDirective;
