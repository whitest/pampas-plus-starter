/* 日历时间选择组件 directive */
import angular from 'angular';
// import * as C from 'core';
import template from './dateTime.pug'

const myDirective = ($timeout, $document, $window, ComponentDateTimePickerFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        replace: true,
        template,
        scope: {
            type: '@',
            model: '=',
            resolve: '&',
            selfClass: '@',
            min: '@',
            max: '@',
            clear: '=?',
            startValue: '@',
            endValue: '@',
            isDisabled: '=?',
            // position: '@',
            // positionTop: '@'
        },
        link: ($scope, element, attr) => {

            const handler = ev => {
                $scope.target = true;
                const t = $timeout(() => {
                    $scope.target = false;
                    $timeout.cancel(t);
                }, 200);
            };

            angular.element(element)
                .on('click', handler);

            $scope.$on('$destroy', () => {
                angular.element(element)
                    .off('click', handler);
            });
        },
        controller: 'ComponentDateTime',
    };
};

export default myDirective;
