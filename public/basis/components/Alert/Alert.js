/* 强提示弹窗 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';


import controller from './Alert.controller.js';
import directive from './Alert.directive.js';
import factory from './Alert.factory.js';


const ComponentAlert = angular
    .module('ComponentAlert', [])
    .controller('ComponentAlert', controller)
.directive('componentAlert', directive)
.factory('ComponentAlertFactory', factory)


export default ComponentAlert;
