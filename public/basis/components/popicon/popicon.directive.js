/* 气泡图标组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification,conf} from '../../core/core.js';

import template from './popicon.pug'

const popIconBase = conf.popIconBase;

const myDirective = ($timeout, ComponentPopalertFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            baseType: '@',
            popTitle: '@',
            iconClass: '@',
            selfClass: '@',
            isPermission: '@',
            noPermission: '=',
            click: '&',
            unClick: '=',
        },
        link: ($scope, elem) => {

            $scope.title = $scope.popTitle || (!!$scope.baseType ? popIconBase[$scope.baseType].title : '');
            $scope.baseClass = !!$scope.baseType ? popIconBase[$scope.baseType].className : '';

            $scope.hoverEnterEvent = () => {
                $scope.popshow = true;
                const t = $timeout(() => {
                    const w = angular.element(elem)
                        .find('span')[0].clientWidth;
                    angular.element(elem)
                        .find('span')
                        .css({
                            'margin-left': `-${(w - 30) / 2}px`
                        });
                    $timeout.cancel(t);
                }, 0);
            };
            $scope.hoverLeaveEvent = () => {
                $scope.popshow = false;
            };
            $scope.clickEvent = (ev) => {
                ev.stopPropagation();
                if (!!$scope.isPermission && !$scope.noPermission) {
                    ComponentPopalertFactory.error('您没有权限');
                    return;
                };
                if (!!$scope.unClick) return; //不可点击状态
                $scope.click();
            };


        },
    };
};

export default myDirective;
