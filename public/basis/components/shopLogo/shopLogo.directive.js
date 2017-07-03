/* 店铺logo directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './shopLogo.pug'

const myDirective = ($rootScope) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            logo: '@',
        },
        link: ($scope) => {
            if (!!$scope.logo) {
                $scope.logoStyle = {
                    'background-image': `url(${$scope.logo})`,
                };
            }
        },
    };
};

export default myDirective;
