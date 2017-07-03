/* 小票收据 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './receipt.pug'

const myDirective = ($rootScope, ComponentReceiptFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            config: '=',
        },
        link: ($scope) => {

        },
        controller: 'ComponentReceipt',
    };
};

export default myDirective;
