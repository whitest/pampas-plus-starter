/* 弱提示 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './popalert.controller.js';
import directive from './popalert.directive.js';
import factory from './popalert.factory.js';


const ComponentPopalert = angular
    .module('ComponentPopalert', [])
    .controller('ComponentPopalert', controller)
.directive('componentPopalert', directive)
.factory('ComponentPopalertFactory', factory)


export default ComponentPopalert;
