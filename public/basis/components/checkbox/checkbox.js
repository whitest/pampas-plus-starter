/* 多项选择组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './checkbox.directive.js';
import factory from './checkbox.factory.js';


const ComponentCheckbox = angular
    .module('ComponentCheckbox', [])
    .directive('componentCheckbox', directive)
.factory('ComponentCheckboxFactory', factory)


export default ComponentCheckbox;
