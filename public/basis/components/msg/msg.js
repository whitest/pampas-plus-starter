/* 消息通知 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './msg.controller.js';
import directive from './msg.directive.js';
import factory from './msg.factory.js';


const ComponentMsg = angular
    .module('ComponentMsg', [])
    .controller('ComponentMsg', controller)
.directive('componentMsg', directive)
.factory('ComponentMsgFactory', factory)


export default ComponentMsg;
