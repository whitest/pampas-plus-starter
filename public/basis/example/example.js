import './example.scss';

import angular from 'angular';
import 'angular-route';
import 'angular-highlightjs';
import '../base/js/angularPrint';
import '../base/js/ui-cropper.js';
import '../base/js/paging.js';
import Component from '../components/component';
import views from './views/views.js';
import leftNav from './nav.js';

const example = angular
    .module('example', ['ngRoute', 'views', 'Component','uiCropper', 'hljs','bw.paging','AngularPrint'])
    .controller('example', ($scope, $location,ComponentFactory) => {
        'ngInject';

        $scope.leftNav = leftNav;
        $scope.leftNavChoose = (li) => {
            $scope.leftNavOn = li.link;
            $location.path(`/${li.link}`);
            // 切换关闭loading效果
            ComponentFactory.loadingClose();
        };

    })
    .config(($routeProvider) => {
        'ngInject';

        $routeProvider
            .when('/', {
                redirectTo: '/'
            });
    });

angular.bootstrap(document, [example.name]);
