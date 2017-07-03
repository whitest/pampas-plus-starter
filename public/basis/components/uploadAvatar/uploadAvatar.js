/* 生成头像功能 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './uploadAvatar.controller.js';
import directive from './uploadAvatar.directive.js';
import factory from './uploadAvatar.factory.js';


const ComponentUploadAvatar = angular
    .module('ComponentUploadAvatar', [])
    .controller('ComponentUploadAvatar', controller)
.directive('componentUploadAvatar', directive)
.factory('ComponentUploadAvatarFactory', factory)


export default ComponentUploadAvatar;
