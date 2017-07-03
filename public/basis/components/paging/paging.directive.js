/* 分页组件 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './paging.pug'

const myDirective = ($rootScope, ComponentPagingFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            pageInfo: '=',
            selfClass: '@?',
            pageInit:'=?',
        },
        link: ($scope) => {

        },
        controller: 'ComponentPaging',
    };
};

export default myDirective;
