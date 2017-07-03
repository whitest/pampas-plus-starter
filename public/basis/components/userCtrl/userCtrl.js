/* 用户退出登录 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './userCtrl.controller.js';
import directive from './userCtrl.directive.js';


const ComponentUserCtrl = angular
    .module('ComponentUserCtrl', [])
    .controller('ComponentUserCtrl', controller)
.directive('componentUserCtrl', directive)


export default ComponentUserCtrl;
