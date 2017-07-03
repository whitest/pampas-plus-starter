/* 详情展示图 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './normalPic.directive.js';
import factory from './normalPic.factory.js';


const ComponentNormalPic = angular
    .module('ComponentNormalPic', [])
    .directive('componentNormalPic', directive)
.factory('ComponentNormalPicFactory', factory)


export default ComponentNormalPic;
