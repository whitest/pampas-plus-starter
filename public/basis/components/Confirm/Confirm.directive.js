/* 强选择弹窗 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './Confirm.pug'

const myDirective = ($rootScope, ComponentConfirmFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope:{},
        link: ($scope) => {

        },
        controller: 'ComponentConfirm',
    };
};

export default myDirective;
