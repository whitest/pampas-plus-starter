/* 小票收据 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './receipt.controller.js';
import directive from './receipt.directive.js';
import factory from './receipt.factory.js';


const ComponentReceipt = angular
    .module('ComponentReceipt', [])
    .controller('ComponentReceipt', controller)
.directive('componentReceipt', directive)
.factory('ComponentReceiptFactory', factory)


export default ComponentReceipt;
