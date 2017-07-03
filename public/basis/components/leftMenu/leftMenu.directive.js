/* 左侧导航菜单 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './leftMenu.pug'

const myDirective = ($rootScope, $location, ComponentLeftMenuFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            click: '=?',
        },
        link: ($scope) => {
            // $scope.onChecked = 0;

            const showOnMenu = (menuId) => {
                $scope.onChecked = menuId;
            }
            $scope.clickEvent = (r) => {
                r.show = false;
                //获取二级菜单
                let secondMenu = r.childMeunList || [];
                // 跳转页面
                const target = r.childMeunList.length ? r.childMeunList[0] : r;
                let src = r.childMeunList.length ? r.childMeunList[0].menuId : r.menuId;
                $location.path(src);
                //回调
                if (!!$scope.click) {
                    $scope.click(r);
                };
            };
            $scope.mouseenterEvent = (r) => {
                if ($scope.onChecked == r.menuId) return;
                r.show = true;
            };
            $scope.mouseleaveEvent = (r) => {
                r.show = false;
            };
            let _menu = $rootScope.$on('ComponentLeftMenuFactory.menu', (ev, menu) => {
                $scope.menuList = menu;
            });

            // 同过每个路由的resolve 改变当前菜单选中状态
            let _choose = $rootScope.$on('ComponentLeftMenu.choose', (ev, menuId) => {
                showOnMenu(menuId);
            });


            $scope.$on('$destroy', () => {
                _menu();
                _menu = null;
                _choose();
                _choose = null;
            });

        }
    };
};

export default myDirective;
