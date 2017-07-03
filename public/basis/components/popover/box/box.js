/* 气泡信息内部盒子 对外module */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import directive from './box.directive.js';
import factory from './box.factory.js';


const ComponentPopoverBox = angular
    .module('ComponentPopoverBox', [])
    .directive('componentPopoverBox', directive)
.factory('ComponentPopoverBoxFactory', factory)


export default ComponentPopoverBox;
