/* 截图功能组件 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './cropper.pug'

const myDirective = ($rootScope, $timeout, ComponentCropperFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            config: '=?',
            open: '=',
            resolve: '=?',
        },
        link: ($scope, element) => {
            // 打开
            $scope.open = () => {
                const t = $timeout(() => {
                    document.getElementById('cropperFileInput')
                        .click();
                    $timeout.cancel(t);
                }, 0);
                $scope.popOpen();
            };

            // 关闭
            $scope.close = () => {
                $scope.myImage = '';
                angular.element(document.getElementById('cropperFileInput'))
                    .replaceWith('<input type="file" name="avatar" id="cropperFileInput" class="component__cropper_file" accept="image/gif,image/jpeg,image/jpg,image/tiff,image/png"/>');
                const t = $timeout(() => {
                    angular.element(document.getElementById('cropperFileInput'))
                        .on('change', handleFileSelect);
                    $timeout.cancel(t);
                }, 10);
                $scope.popClose();
            };

            // 截图事件
            $scope.cropperEvent = () => {
                $scope.close();
                $scope.resolve($scope.myCroppedImage);
            };

            const handleFileSelect = function(evt) {
                const file = evt.currentTarget.files[0];
                const reader = new FileReader();
                reader.onload = function(evt) {
                    $scope.$apply(function($scope) {
                        $scope.myImage = evt.target.result;
                    });
                };
                if (!file) return;
                reader.readAsDataURL(file);
            };

            angular.element(document.getElementById('cropperFileInput'))
                .on('change', handleFileSelect);

            // 初始化
            ComponentCropperFactory.init($scope.config)
                .then(config => {
                    $scope.minSize = config.minSize;
                    $scope.resultSize = config.resultSize;
                    $scope.areaType = config.areaType;
                    $scope.aspectRatio = config.aspectRatio;
                    $scope.myImage = '';
                    $scope.myCroppedImage = '';
                });


            $scope.$on('$destroy', () => {
                angular.element(document.getElementById('cropperFileInput'))
                    .off('change', handleFileSelect);
            });

        },
    };
};

export default myDirective;
