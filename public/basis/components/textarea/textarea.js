/* 多行文本域组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './textarea.directive.js';


const ComponentTextarea = angular
    .module('ComponentTextarea', [])
    .directive('componentTextarea', directive)


export default ComponentTextarea;
