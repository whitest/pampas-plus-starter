/* 输入框组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './input.pug'

const myDirective = ($rootScope, $timeout, ComponentInputFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            type: '@',
            inputType: '@',
            inputId: '@',
            inputClass: '@',
            inputName: '@',
            placeholder: '@',
            maxlength: '=?',
            isDisabled: '=',
            isReadonly: '=',
            model: '=',
            change: '&?',
            enter: '&?',
            focus: '&?',
            blur: '&?'
        },
        link: ($scope, elem) => {
            // 输入框类型
            $scope.inputType = $scope.inputType || 'normal';
            $scope.placeholder = $scope.placeholder || ($scope.inputType === 'date' ? '请选择日期' : '');
            // if (!!$scope.isDisabled) {
            //     angular.element(elem)
            //         .find('input')
            //         .attr('disabled', 'true');
            // };
            if (!!$scope.isReadonly) {
                angular.element(elem)
                    .find('input')
                    .attr('readonly', 'true');
            };

            //监听回车
            $scope.enterEvent = ($event) => {
                if (!!$scope.enter && $event.keyCode == 13) $scope.enter();
            };

            //监听失去焦点
            $scope.blurEvent = () => {
                if (!!$scope.blur) $scope.blur();
            };

            //监听获取焦点
            $scope.focusEvent = () => {
                if (!!$scope.focus) $scope.focus();
            };

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
                .find('input')
                .on('focus', focusFn)
                .on('blur', blurFn);

            $scope.$on('$destroy', () => {
                angular.element(elem)
                    .find('input')
                    .off('focus', focusFn)
                    .off('blur', blurFn);
            });

        },
    };
};

export default myDirective;
