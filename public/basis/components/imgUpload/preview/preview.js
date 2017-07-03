/* 展示预览图 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './preview.directive.js';


const ComponentImgUploadPreview = angular
    .module('ComponentImgUploadPreview', [])
    .directive('componentImgUploadPreview', directive)


export default ComponentImgUploadPreview;
