/* 上传图片组件 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './imgUpload.controller.js';
import directive from './imgUpload.directive.js';
import factory from './imgUpload.factory.js';
import preview from './preview/preview.js';


const ComponentImgUpload = angular
    .module('ComponentImgUpload', [preview.name])
    .controller('ComponentImgUpload', controller)
.directive('componentImgUpload', directive)
.factory('ComponentImgUploadFactory', factory)


export default ComponentImgUpload;
