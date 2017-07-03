/* loading状态 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './loading.controller.js';
import directive from './loading.directive.js';
import factory from './loading.factory.js';


const ComponentLoading = angular
    .module('ComponentLoading', [])
    .controller('ComponentLoading', controller)
.directive('componentLoading', directive)
.factory('ComponentLoadingFactory', factory)


export default ComponentLoading;
