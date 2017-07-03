/* 合同收据 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './contract.pug'

const myDirective = ($rootScope, ComponentContractFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope:{
            config:'=',
        },
        link: ($scope) => {

        },
        controller: 'ComponentContract',
    };
};

export default myDirective;
