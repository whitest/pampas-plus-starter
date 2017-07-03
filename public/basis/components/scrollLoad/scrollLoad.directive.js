/* 滚动加载组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myDirective = ($rootScope, ComponentScrollLoadFactory) => {
    'ngInject';
    return {
        restrict: 'A',
        scope: {

        },
        link: ($scope, element, attr, ctrl) => {
            let onTotal = 1,
                recordsTotal = 0,
                lastScrollTop = 0;
            /*初始化*/
            const initInfo = (data) => {
                recordsTotal = Math.ceil(data.Result.total / conf.limit);
            };
            /*滚动请求*/
            const ajaxRecords = () => {
                angular.element(element)
                    .on('scroll', (ev) => {
                        /*已请求次数大于需请求次数清除滚动*/
                        if (onTotal >= recordsTotal) {
                            angular.element(document.getElementById('consume_popup_info_list'))
                                .off('scroll');
                        };
                        /*没有返回结果 return*/
                        if (!$scope.rows || !$scope.rows.length) return;
                        /*还没到距离底部50px时*/
                        if (ev.target.scrollHeight - ev.target.scrollTop - ev.target.clientHeight > 50) {
                            lastScrollTop = ev.target.scrollTop;
                            return;
                        };
                        /*已滚动距离还未到底部请求范围距离 return*/
                        if (ev.target.scrollTop < lastScrollTop) return;


                    });
            };
            ajaxRecords();

        },
    };
};

export default myDirective;
