/* 店铺列表 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './shops.controller.js';
import directive from './shops.directive.js';


const ComponentShops = angular
    .module('ComponentShops', [])
    .controller('ComponentShops', controller)
.directive('componentShops', directive)


export default ComponentShops;
