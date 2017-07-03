/* 拍照功能组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './webcam.directive.js';
import factory from './webcam.factory.js';


const ComponentWebcam = angular
    .module('ComponentWebcam', [])
    .directive('componentWebcam', directive)
.factory('ComponentWebcamFactory', factory)


export default ComponentWebcam;
