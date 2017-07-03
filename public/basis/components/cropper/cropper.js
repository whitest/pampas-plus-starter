/* 截图功能组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './cropper.directive.js';
import factory from './cropper.factory.js';


const ComponentCropper = angular
    .module('ComponentCropper', [])
    .directive('componentCropper', directive)
.factory('ComponentCropperFactory', factory)


export default ComponentCropper;
