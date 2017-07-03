/* 搜索结果 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myDirective = ($rootScope, $document, $timeout, ComponentSearchResultFactory) => {
    'ngInject';
    return {
        restrict: 'A',
        replace: true,
        // scope:{},
        link: ($scope, elem) => {
            elem.addClass('component__search__result');


        },
        controller: 'ComponentSearchResult',
    };
};

export default myDirective;
