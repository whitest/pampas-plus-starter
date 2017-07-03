/* loading状态 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './loading.pug'

const myDirective = ($rootScope, ComponentLoadingFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope:{},
        link: ($scope) => {

        },
        controller: 'ComponentLoading',
    };
};

export default myDirective;
