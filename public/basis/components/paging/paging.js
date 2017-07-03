/* 分页组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './paging.controller.js';
import directive from './paging.directive.js';
import factory from './paging.factory.js';


const ComponentPaging = angular
    .module('ComponentPaging', [])
    .controller('ComponentPaging', controller)
.directive('componentPaging', directive)
.factory('ComponentPagingFactory', factory)


export default ComponentPaging;
