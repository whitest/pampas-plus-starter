/* 输入框组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './input.directive.js';
import factory from './input.factory.js';


const ComponentInput = angular
    .module('ComponentInput', [])
    .directive('componentInput', directive)
.factory('ComponentInputFactory', factory)


export default ComponentInput;
