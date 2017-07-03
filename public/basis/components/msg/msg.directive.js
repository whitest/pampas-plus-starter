/* 消息通知 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './msg.pug'

const myDirective = ($rootScope, ComponentMsgFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {},
        link: ($scope) => {},
        controller: 'ComponentMsg',
    };
};

export default myDirective;
