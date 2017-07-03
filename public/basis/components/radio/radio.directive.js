/* 单项选择组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './radio.pug'

const myDirective = ($rootScope, ComponentRadioFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            isChecked: '=',
            isDisabled: '=',
            title: '@',
            click: '&',
            selfClass: '@',
        },
        link: ($scope) => {
            // 点击事件
            $scope.clickEvent = () => {
                if (!!$scope.isDisabled) return;
                $scope.click();
            };
        },
    };
};

export default myDirective;
