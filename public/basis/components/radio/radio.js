/* 单项选择组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './radio.directive.js';
import factory from './radio.factory.js';


const ComponentRadio = angular
    .module('ComponentRadio', [])
    .directive('componentRadio', directive)
.factory('ComponentRadioFactory', factory)


export default ComponentRadio;
