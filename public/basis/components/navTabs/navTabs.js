/* 标签页 顶部二级菜单 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './navTabs.directive.js';


const ComponentNavTabs = angular
    .module('ComponentNavTabs', [])
    .directive('componentNavTabs', directive)


export default ComponentNavTabs;
