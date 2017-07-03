/* 按钮组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';

import template from './button.pug';

const btnType = {
    normal: {
        className: 'normal',
    },
    first: {
        className: 'first',
    },
    second: {
        className: 'second',
    },
};

const myDirective = ($rootScope, $timeout, ComponentButtonFactory, ComponentPopalertFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            type: '@',
            btnName: '@',
            btnClass: '@',
            btnType: '@',
            click: '&',
            isLoad: '@?', // 判断当前按钮点击后是否进行ajax提交，如果为 true，点击一次后，不可再点，直至ajax后台相应后解除
            isUnclick: '=',
            isPermission: '@?', // {bollean} 按钮是否有权限的校验
            noPermission: '=?', // 如果 isPermission == true，通过 noPermission 来区分是否有权限
        },
        link: ($scope, elem) => {
            $scope.noPermission = $scope.noPermission
            // 按钮类型
            $scope.btnType = $scope.btnType || 'button';
            // 按钮样式
            $scope.className = btnType[$scope.type || 'normal'].className;
            // 按钮名 value
            $scope.btnName = $scope.btnName || '确定';
            // 按钮mousedown
            $scope.mousedownEvent = () => $scope.isPress = true;
            // 按钮 mouseup
            $scope.mouseupEvent = () => $scope.isPress = false;
            // 按钮点击
            $scope.clickEvent = () => {
                // 权限校验
                if(!!$scope.isPermission && !$scope.noPermission) {
                    ComponentPopalertFactory.error('您没有权限');
                    return;
                };
                // 连击校验
                if(!!$scope.loading) return;
                $scope.loading = true;
                // 非submit的按钮，500毫秒后才可点击（防止连续点击间隔过短）
                if(!$scope.isLoad) {
                    const t = $timeout(() => {
                        $scope.loading = false;
                        $timeout.cancel(t);
                    }, 500);
                };
                if(!!$scope.click) {
                    $scope.click();
                };
            };


            let removeLoading = $rootScope.$on('ComponentButtonFactory.remove', () => {
                $scope.loading = false;
            });
            $scope.$on('$destroy', () => {
                removeLoading();
                removeLoading = null;
            });
        },
    };
};

export default myDirective;
