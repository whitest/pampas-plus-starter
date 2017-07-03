/* 核心 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './picker.pug'

const myDirective = ($timeout, $q, $document) => {
    'ngInject';
    return {
        restrict: 'EA',
        replace: true,
        template,
        link: ($scope, ele) => {
            const handler = ev => {
                const o = $timeout(() => {
                    $scope.hoursListShow = false;
                    $scope.minutesListShow = false;
                    $timeout.cancel(o);
                }, 0);
            };
            angular.element(ele)
                .on('click', handler);
            // 默认显示日期表
            $scope.tableType = $scope.type == 'month' ? 'month' : 'date';

            $scope.$on('$destroy', () => {
                angular.element(ele)
                    .off('click', handler);
            });
        },
    };
};

export default myDirective;
