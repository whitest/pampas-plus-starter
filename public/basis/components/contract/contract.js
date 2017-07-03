/* 合同收据 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import controller from './contract.controller.js';
import directive from './contract.directive.js';
import factory from './contract.factory.js';


const ComponentContract = angular
    .module('ComponentContract', [])
    .controller('ComponentContract', controller)
.directive('componentContract', directive)
.factory('ComponentContractFactory', factory)


export default ComponentContract;
