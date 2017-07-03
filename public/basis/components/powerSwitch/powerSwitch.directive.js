/* 滑动开关组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './powerSwitch.pug'

const myDirective = ($timeout, ComponentPowerSwitchFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            config: '=',
            fatherDate: '=',
        },
        link: ($scope) => {
            // 点击事件
            $scope.clickEvent = (ev) => {
                ev.stopPropagation();
                $scope.isChecked = !$scope.isChecked;
                $scope.titleOn = $scope.isChecked ? $scope.titleLeft : $scope.titleRight;
                $scope.config.clickEvent($scope.fatherDate, $scope.isChecked);
            };
            const t = $timeout(() => {
                ComponentPowerSwitchFactory
                    .init($scope.config)
                    .then(config => {
                        $scope.titleLeft = config.titleLeft;
                        $scope.titleRight = config.titleRight;
                        $scope.titleOn = config.titleOn;
                        $scope.isChecked = config.isChecked;
                        $timeout.cancel(t);
                    });
            }, 0);
        },
    };
};

export default myDirective;
