/* 用户退出登录 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './userCtrl.pug'

const myDirective = ($rootScope) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        scope: {},
        replace: true,
        link: ($scope) => {

        },
        controller: 'ComponentUserCtrl',
    };
};

export default myDirective;
