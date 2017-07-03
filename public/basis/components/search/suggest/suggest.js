/* 搜索suggest框 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './suggest.controller.js';
import directive from './suggest.directive.js';
import factory from './suggest.factory.js';


const ComponentSearchSuggest = angular
    .module('ComponentSearchSuggest', [])
    .controller('ComponentSearchSuggest', controller)
.directive('componentSearchSuggest', directive)
.factory('ComponentSearchSuggestFactory', factory)


export default ComponentSearchSuggest;
