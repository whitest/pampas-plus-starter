/* 气泡图标组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './popicon.directive.js';


const ComponentPopicon = angular
    .module('ComponentPopicon', [])
    .directive('componentPopicon', directive)


export default ComponentPopicon;
