/* 顶部二级菜单导航 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './topBar.pug'

const myDirective = ($rootScope, ComponentTopBarFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
          showMsgAndShops:"=",
        },
        link: ($scope) => {

        },
        controller: 'ComponentTopBar',
    };
};

export default myDirective;
