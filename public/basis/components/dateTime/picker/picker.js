/* 核心 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './picker.controller.js';
import directive from './picker.directive.js';
import factory from './picker.factory.js';


const ComponentDateTimePicker = angular
    .module('ComponentDateTimePicker', [])
    .controller('ComponentDateTimePicker', controller)
.directive('componentDateTimePicker', directive)
.factory('ComponentDateTimePickerFactory', factory)


export default ComponentDateTimePicker;
