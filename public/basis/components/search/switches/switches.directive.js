/* 切换状态列表 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './switches.pug'

const myDirective = ($rootScope, ComponentSearchSwitchesFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        // scope:{},
        link: ($scope) => {

        },
        controller: 'ComponentSearchSwitches',
    };
};

export default myDirective;
