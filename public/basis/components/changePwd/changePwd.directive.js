/* 修改密码 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './changePwd.pug'

const myDirective = ($rootScope, ComponentChangePwdFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope:{},
        link: ($scope) => {

        },
        controller: 'ComponentChangePwd',
    };
};

export default myDirective;
