/* 弱提示 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './popalert.pug';

const myDirective = ($rootScope, ComponentPopalertFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {},
        link: ($scope) => {

        },
        controller: 'ComponentPopalert',
    };
};

export default myDirective;
