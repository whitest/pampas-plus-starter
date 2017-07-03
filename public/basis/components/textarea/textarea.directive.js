/* 多行文本域组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './textarea.pug'

const myDirective = ($rootScope, $timeout) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            textareaName: '@',
            textareaClass: '@',
            model: '=',
            placeholder: '@',
            maxlength:'=',
        },
        link: ($scope, elem) => {


            const focusFn = (ev) => {
                const t = $timeout(() => {
                    $scope.isFocus = true;
                    $timeout.cancel(t);
                }, 0);
            };
            const blurFn = (ev) => {
                const t = $timeout(() => {
                    $scope.isFocus = false;
                    $timeout.cancel(t);
                }, 0);
            };

            angular.element(elem)
                .find('textarea')
                .on('focus', ev => focusFn)
                .on('blur', ev => blurFn);


            $scope.$on('$destroy', () => {
                angular.element(elem)
                    .find('textarea')
                    .off('focus', ev => focusFn)
                    .off('blur', ev => blurFn);
            })
        },
    };
};

export default myDirective;
