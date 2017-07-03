/* 表格组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification,conf} from '../../core/core.js';

import template from './table.pug';

const myDirective = ($timeout, ComponentTableFactory, ComponentPopalertFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            config: '=',
            init: '=?',
            delay: '@?',
            refresh: '=?',
        },
        link: ($scope, elem) => {
            // 点击一行
            $scope.trClick = (b) => {
                // 单选
                if(!!$scope.isRadio) {
                    b.tableChecked = true;
                    angular.forEach($scope.body, el => {
                        if(el === b) return;
                        el.tableChecked = false;
                    });
                    $scope.config.radioChecked = b;
                };
                // 多选
                if(!!$scope.isCheckbox) {
                    b.tableChecked = !b.tableChecked;
                    $scope.config.checkboxChecked = [];
                    angular.forEach($scope.body, el => {
                        if(!el.tableChecked) return;
                        $scope.config.checkboxChecked.push(el)
                    });
                    $scope.allChecked = $scope.config.checkboxChecked.length === $scope.body.length ? true : false;
                };
                if(!!$scope.config.clickResolve) {
                    $scope.config.clickResolve(b);
                };
            };
            // 点击 全选按钮
            $scope.chooseAll = () => {
                let i = 0,
                    c = false;
                for(;;) {
                    if(i >= $scope.body.length) break;
                    if(!$scope.body[i].tableChecked) {
                        c = true;
                        break;
                    };
                    i++;
                };
                $scope.config.checkboxChecked = [];
                // 如果 body 中含有未选中的选项，则全选
                if(c) {
                    angular.forEach($scope.body, b => {
                        b.tableChecked = true;
                        $scope.config.checkboxChecked.push(b);
                    });
                    $scope.allChecked = true;
                } else {
                    angular.forEach($scope.body, b => b.tableChecked = false);
                    $scope.allChecked = false;
                };
            };
            // 排序事件
            $scope.sortEvent = (h) => {
                if(!h.sortEvent && !angular.isFunction(h.sortEvent)) throw('排序回调事件设置不正确');
                // if (!angular.isNumber(h.sort) || h.sort > 2) throw ('排序字段必须是整数且小于3');
                // h.sort = h.sort == 2 ? 0 : h.sort + 1;
                h.sort = h.sort == -1 ? 1 : -1;
                h.sortEvent(h.sort);
            };

            // 超链接字段点击事件
            $scope.linkClickEvent = (ev, l, b, index) => {
                ev.stopPropagation();
                if(!!b[l.unclick]) return;
                if(!!l.isPermission && !l.noPermission) {
                    ComponentPopalertFactory.error('您没有权限');
                    return;
                };
                l.clickEvent(b, index);
            };
            /**
             * 教练打标签事件
             * @param  {Object} ev  [$event]
             * @param  {String} key [可通过head[key] 获取 回调事件]
             * @param  {Object} tr [tbody 当前行信息]
             * @return {[type]}     [description]
             */
            $scope.coachTagEvent = (ev, key, tr) => {
                $scope.head[key].coachTagEvent(ev.target, tr);
            };
            $scope.test = {
                titleLeft: '发送',
                titleRight: '停发',
                clickEvent: (c) => {
                    if(!!c) {
                        // console.log('开');
                    } else {
                        // console.log('关');
                    }
                },
            };
            // 初始化
            $scope.init = (config) => {
                // console.log($scope.config);
                $scope.config = config;
                ComponentTableFactory.initData($scope.config)
                    .then(config => {
                        $scope.head = config.head;
                        $scope.fields = config.fields;
                        $scope.links = config.links;
                        $scope.pics = config.pics;
                        $scope.coachTag = config.coachTag;
                        $scope.ellipsis = config.ellipsis;
                        $scope.powerSwitches = config.powerSwitches;
                        $scope.isCheckbox = !!config.checkbox;
                        $scope.isRadio = !!config.radio;
                        $scope.isControl = !!config.control && !!config.control.length;
                        $scope.ClassBorder = config.ClassBorder;
                        $scope.ClassThinPadding = config.ClassThinPadding;
                        $scope.body = verification.emptyObject($scope.pics) ? config.body : ComponentTableFactory.getPics(config.body, config.pics);
                        $scope.emptyStyle = config.emptyStyle;
                        return;
                    })
                    .then(() => tableScrollX())
                    .catch(err =>
                        console.error(err));
            };

            $scope.refresh = () => {
                ComponentTableFactory.initData($scope.config)
                    .then(config => {
                        $scope.body = verification.emptyObject($scope.pics) ? config.body : ComponentTableFactory.getPics(config.body, $scope.pics);
                        return;
                    })
                    .then(() => tableScrollX());
            };

            if(!$scope.delay) {
                const t = $timeout(() => {
                    $scope.init($scope.config);
                    $timeout.cancel(t);
                }, 0);
            };

            // table左右滚动
            const tableMain = elem.children('.component__table_main');
            const tableScrollX = function () {
                const t = $timeout(() => {
                    $scope.shadowLeft = tableMain[0].scrollLeft > 30 ? true : false;
                    $scope.shadowRight = tableMain[0].scrollWidth - tableMain[0].clientWidth - tableMain[0].scrollLeft > 30 ? true : false;
                    $timeout.cancel(t);
                });
            };
            tableMain.on('scroll', tableScrollX);



            $scope.$on('$destroy', () => {
                tableMain.off('scroll', tableScrollX);
            });

        },
    };
};

export default myDirective;
