/* 强选择弹窗 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './Confirm.controller.js';
import directive from './Confirm.directive.js';
import factory from './Confirm.factory.js';


const ComponentConfirm = angular
    .module('ComponentConfirm', [])
    .controller('ComponentConfirm', controller)
.directive('componentConfirm', directive)
.factory('ComponentConfirmFactory', factory)


export default ComponentConfirm;
