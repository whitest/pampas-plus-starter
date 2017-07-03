/* 搜索功能 对外module */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import directive from './search.directive.js';
import factory from './search.factory.js';
import box from './box/box.js';
import switches from './switches/switches.js';
import suggest from './suggest/suggest.js';
import result from './result/result.js';


const ComponentSearch = angular
    .module('ComponentSearch', [box.name,switches.name,suggest.name,result.name])
    .directive('componentSearch', directive)
.factory('ComponentSearchFactory', factory)


export default ComponentSearch;
