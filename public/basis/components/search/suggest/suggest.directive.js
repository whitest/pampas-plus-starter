/* 搜索suggest框 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myDirective = ($rootScope, $document, $timeout, ComponentSearchSuggestFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        replace: true,
        link: ($scope, elem) => {},
        controller: 'ComponentSearchSuggest',
    };
};

export default myDirective;
