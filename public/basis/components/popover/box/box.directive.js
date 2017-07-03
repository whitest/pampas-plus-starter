/* 气泡信息内部盒子 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './box.html'

const myDirective = ($rootScope, ComponentPopoverBoxFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope:{},
        link: ($scope) => {

        },

    };
};

export default myDirective;
