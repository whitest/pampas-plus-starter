/* 店铺logo 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './shopLogo.directive.js';


const ComponentShopLogo = angular
    .module('ComponentShopLogo', [])
    .directive('componentShopLogo', directive)


export default ComponentShopLogo;
