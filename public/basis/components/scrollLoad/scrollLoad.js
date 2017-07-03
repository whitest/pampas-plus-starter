/* 滚动加载组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './scrollLoad.directive.js';
import factory from './scrollLoad.factory.js';


const ComponentScrollLoad = angular
    .module('ComponentScrollLoad', [])
    .directive('componentScrollLoad', directive)
.factory('ComponentScrollLoadFactory', factory)


export default ComponentScrollLoad;
