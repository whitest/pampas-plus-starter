/* 提示帮助组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './prompt.controller.js';
import directive from './prompt.directive.js';
import factory from './prompt.factory.js';


const ComponentPrompt = angular
    .module('ComponentPrompt', [])
    .controller('ComponentPrompt', controller)
.directive('componentPrompt', directive)
.factory('ComponentPromptFactory', factory)


export default ComponentPrompt;
