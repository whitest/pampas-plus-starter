/* 弹窗组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './popup.directive.js';
import factory from './popup.factory.js';


const ComponentPopup = angular
    .module('ComponentPopup', [])
    .directive('componentPopup', directive)
.factory('ComponentPopupFactory', factory)


export default ComponentPopup;
