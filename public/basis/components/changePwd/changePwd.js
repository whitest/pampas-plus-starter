/* 修改密码 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './changePwd.controller.js';
import directive from './changePwd.directive.js';
import factory from './changePwd.factory.js';


const ComponentChangePwd = angular
    .module('ComponentChangePwd', [])
    .controller('ComponentChangePwd', controller)
.directive('componentChangePwd', directive)
.factory('ComponentChangePwdFactory', factory)


export default ComponentChangePwd;
