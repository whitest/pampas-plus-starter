/* 一级返回按钮，通常用在关闭子页面或子弹窗等 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './topBack.pug'

const myDirective = ($rootScope) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            click: '&',
            title: '@',
            selfClass: '@',
        },
        link: ($scope) => {
            // 按钮名称
            $scope.title = $scope.title || '返回';
            $scope.clickEvent = () => {
                if (!$scope.click) return;
                $scope.click();
            }
        },
    };
};

export default myDirective;
