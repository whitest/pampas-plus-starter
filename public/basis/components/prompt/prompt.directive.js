/* 提示帮助组件 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './prompt.pug';

const myDirective = ($rootScope, ComponentPromptFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            pTitle: '@',
            selfClass: '@?',
        },
        link: ($scope) => {

        },
        controller: 'ComponentPrompt',
    };
};

export default myDirective;
