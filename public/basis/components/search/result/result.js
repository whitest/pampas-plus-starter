/* 搜索结果 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './result.controller.js';
import directive from './result.directive.js';
import factory from './result.factory.js';


const ComponentSearchResult = angular
    .module('ComponentSearchResult', [])
    .controller('ComponentSearchResult', controller)
.directive('componentSearchResult', directive)
.factory('ComponentSearchResultFactory', factory)


export default ComponentSearchResult;
