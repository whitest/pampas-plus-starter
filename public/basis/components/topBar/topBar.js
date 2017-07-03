/* 顶部二级菜单导航 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './topBar.controller.js';
import directive from './topBar.directive.js';
import factory from './topBar.factory.js';


const ComponentTopBar = angular
    .module('ComponentTopBar', [])
    .controller('ComponentTopBar', controller)
.directive('componentTopBar', directive)
.factory('ComponentTopBarFactory', factory)


export default ComponentTopBar;
