/* 按钮组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';

import directive from './button.directive.js';
import factory from './button.factory.js';


const ComponentButton = angular
    .module('ComponentButton', [])
    .directive('componentButton', directive)
.factory('ComponentButtonFactory', factory)


export default ComponentButton;
