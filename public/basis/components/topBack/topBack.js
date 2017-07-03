/* 一级返回按钮，通常用在关闭子页面或子弹窗等 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './topBack.directive.js';


const ComponentTopBack = angular
    .module('ComponentTopBack', [])
    .directive('componentTopBack', directive)


export default ComponentTopBack;
