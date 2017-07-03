/* 强提示弹窗 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';


import template from './Alert.pug'

const myDirective = ($rootScope, ComponentAlertFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope:{},
        link: ($scope) => {

        },
        controller: 'ComponentAlert',
    };
};

export default myDirective;
