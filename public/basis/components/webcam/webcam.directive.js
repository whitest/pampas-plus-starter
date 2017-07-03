/* 拍照功能组件 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './webcam.pug'

const myDirective = ($rootScope, $timeout, ComponentWebcamFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            open: '=',
            resolve: '=',
        },
        link: ($scope, elem) => {
            // 打开摄像头
            $scope.open = () => {
                $scope.popOpen();
                const t = $timeout(() => {
                    Webcam.set({
                        image_format: 'png',
                        jpeg_quality: 45,
                    });
                    Webcam.attach(elem[0].querySelector('[data-id="componentWebcamZone"]'));
                    $timeout.cancel(t);
                }, 0);
            };

            // 关闭
            $scope.close = () => {
                Webcam.reset();
                $scope.popClose();
            };

            // 拍照
            $scope.takePhotoEvent = () => {
                Webcam.snap((base64) => {
                    $scope.resolve(base64);
                    $scope.close();
                });
            };
        },
    };
};

export default myDirective;
