/* 切换状态列表 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './switches.controller.js';
import directive from './switches.directive.js';
import factory from './switches.factory.js';


const ComponentSearchSwitches = angular
    .module('ComponentSearchSwitches', [])
    .controller('ComponentSearchSwitches', controller)
.directive('componentSearchSwitches', directive)
.factory('ComponentSearchSwitchesFactory', factory)


export default ComponentSearchSwitches;
