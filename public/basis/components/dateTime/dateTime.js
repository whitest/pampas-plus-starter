/* 日历时间选择组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './dateTime.controller.js';
import directive from './dateTime.directive.js';
import picker from './picker/picker.js';


const ComponentDateTime = angular
    .module('ComponentDateTime', [picker.name])
    .controller('ComponentDateTime', controller)
.directive('componentDateTime', directive)


export default ComponentDateTime;
