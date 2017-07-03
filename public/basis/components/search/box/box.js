/* 搜索框 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './box.controller.js';
import directive from './box.directive.js';
import factory from './box.factory.js';


const ComponentSearchBox = angular
    .module('ComponentSearchBox', [])
    .controller('ComponentSearchBox', controller)
.directive('componentSearchBox', directive)
.factory('ComponentSearchBoxFactory', factory)


export default ComponentSearchBox;
