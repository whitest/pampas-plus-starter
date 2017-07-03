/* 下拉框组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './select.pug'

const myDirective = ($document, $timeout, ComponentSelectFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            config: '=',
            /**
             * [init description]
             * @type {String} init 设置当前选中的 title (初始化)
             */
            init: '=?',
        },
        link: ($scope) => {
            // 打开
            $scope.openEvent = (ev) => {
                // ev.stopPropagation();
                if ($scope.config.isDisabled) return; //不可点击状态
                if ($scope.show) {
                    $scope.show = false;
                    return;
                };
                const t = $timeout(() => {
                    $scope.show = !$scope.show;
                    $timeout.cancel(t)
                }, 50);
            };

            // 关闭 绑定到 $document 上
            const closeEvent = (ev) => {
                const t = $timeout(() => {
                    $scope.show = false;
                    $timeout.cancel(t)
                }, 0);
            };

            // 选择
            $scope.clickEvent = (l) => {
                $scope.model = l[$scope.words];
                $scope.config.resolve(l);
            };
            $scope.init = (value = '') => $scope.model = value;

            angular.element($document)
                .on('click', closeEvent);

            $scope.$on('$destroy', ev => {
                angular.element($document)
                    .off('click', closeEvent);
            });

            ComponentSelectFactory.init($scope.config)
                .then(config => {
                    $scope.words = config.words;
                    if (!!config.initValue) {
                        $scope.init(config.initValue);
                    };
                })
        },
    };
};

export default myDirective;
