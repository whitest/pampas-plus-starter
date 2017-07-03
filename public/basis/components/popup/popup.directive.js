/* 弹窗组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myDirective = ($timeout, $compile, $window, ComponentPopupFactory) => {
    'ngInject';
    return {
        restrict: 'A',
        replace: false,
        scope: {
            popOpen: '=',
            popInit: '&?',
            popClose: '=',
            popClear: '=?',
            popIsBtn: '@',
        },
        link: ($scope, elem) => {
            const closeBtn = $compile('<div class="component__popup_close" ng-click="popClose()"></div>')($scope);

            elem.addClass('component__popup_main')
                .append(closeBtn)
                .wrap('<div class="component__popup"></div>')
                .after('<div class="component__popup_sibling"></div>');

            if(!!$scope.popIsBtn) {
                elem.addClass('component__popup_main_has_btn')
            }

            $scope.popClose = () => {
                elem.parent().removeClass('anim');
                const t = $timeout(() => {
                    elem.parent().removeClass('open');
                    if($scope.popClear) {
                        $scope.popClear();
                    };
                    $timeout.cancel(t);
                }, 200);

            };

            $scope.popOpen = () => {
                elem.parent().addClass('open');
                const t = $timeout(() => {
                    elem.parent().addClass('anim');
                    $timeout.cancel(t);
                });
                if($scope.popInit && angular.isFunction($scope.popInit)) {
                    $scope.popInit();
                };
            };

            $scope.elemHeight = () => elem[0].offsetHeight;

            const max = $window.innerHeight - 40;

            // const w = $scope.$watch(() => elem[0].offsetHeight, (val) => {
            //     const t = $timeout(() => {
            //         const h = val >= max + 2 ? `${max}px` : 'auto';
            //         elem.css('height', h);
            //         $timeout.cancel(t)
            //     }, 10);
            // });

            // $scope.$on('$destroy', ev => {
            // w();
            // });

            // let div;
            // angular.forEach(elem.children(), el => {
            //     if (!angular.element(el).hasClass('component__popup_scroll')) return;
            //     div = el;
            // });

        },
    };
};

export default myDirective;
