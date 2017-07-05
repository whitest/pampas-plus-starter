import * as angular from 'angular';
import * as C from 'core';

import 'angular-route';
import '../basis/base/js/angular-file-upload';
import '../basis/base/js/angularPrint';
import '../basis/base/js/angular-echarts.js';
import '../basis/base/js/angular-scroll.js';
import '../basis/base/js/ui-cropper.js';
import '../basis/base/js/angular-ueditor.js';
import '../basis/base/js/ngdropover.js';
import '../basis/base/js/paging.js';
import Base from '../base/base';
import Component from '../component/component';
import './app.root.scss';
import controller from './app.controller';
import service from './app.service';
import config from './app.config';
import run from './app.run';

const app = angular
    .module('app', ['ngRoute', 'angularFileUpload', 'AngularPrint', 'angular-echarts', 'duScroll', 'uiCropper', 'ng.ueditor', 'ngDropover', 'bw.paging', Base.name, Component.name, ]).controller('app', <ng.IControllerConstructor>controller)
   .service('appService', service)
   .config(config)
   .run(run)

angular.bootstrap(document, [app.name])
