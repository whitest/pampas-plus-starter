/* 搜索框 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './box.pug'

const myDirective = ($rootScope, ComponentSearchBoxFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        link: ($scope) => {

        },
        controller: 'ComponentSearchBox',
    };
};

export default myDirective;
