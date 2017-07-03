/* 表格组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './table.directive.js';
import factory from './table.factory.js';


const ComponentTable = angular
    .module('ComponentTable', [])
    .directive('componentTable', directive)
.factory('ComponentTableFactory', factory)


export default ComponentTable;
