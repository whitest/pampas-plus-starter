/* 下拉框组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './select.directive.js';
import factory from './select.factory.js';


const ComponentSelect = angular
    .module('ComponentSelect', [])
    .directive('componentSelect', directive)
.factory('ComponentSelectFactory', factory)


export default ComponentSelect;
