/* 滑动开关组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './powerSwitch.directive.js';
import factory from './powerSwitch.factory.js';


const ComponentPowerSwitch = angular
    .module('ComponentPowerSwitch', [])
    .directive('componentPowerSwitch', directive)
.factory('ComponentPowerSwitchFactory', factory)


export default ComponentPowerSwitch;
