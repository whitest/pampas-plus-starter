/* 左侧导航菜单 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './leftMenu.directive.js';
import factory from './leftMenu.factory.js';


const ComponentLeftMenu = angular
    .module('ComponentLeftMenu', [])
    .directive('componentLeftMenu', directive)
.factory('ComponentLeftMenuFactory', factory)


export default ComponentLeftMenu;
