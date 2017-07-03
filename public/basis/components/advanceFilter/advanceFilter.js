/* 高级筛选 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './advanceFilter.directive.js';
import factory from './advanceFilter.factory.js';


const ComponentAdvanceFilter = angular
    .module('ComponentAdvanceFilter', [])
    .directive('componentAdvanceFilter', directive)
.factory('ComponentAdvanceFilterFactory', factory)


export default ComponentAdvanceFilter;
