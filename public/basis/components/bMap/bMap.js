/* 百度地图 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';


import directive from './bMap.directive.js';


const ComponentBMap = angular
    .module('ComponentBMap', [])
    .directive('componentBMap', directive)


export default ComponentBMap;
