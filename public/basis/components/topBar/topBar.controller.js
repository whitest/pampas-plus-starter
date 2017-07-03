/* 顶部二级菜单导航 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($scope, $rootScope, $location, ComponentTopBarFactory) {
        'ngInject';

        // 二级菜单跳转
        $scope.navTabsClick = (r) => {
            $location.path(r.src);
        };

        //二级菜单选择
        let _choose = $rootScope.$on('ComponentTopBar.choose', (ev, secondMenu) => {
            const arr = []; // nav数组
            let acount = 0; // 计数
            let keys = 0; // 应选中那个
            secondMenu.map.forEach((el, i) => {
                arr.push({
                    index: i,
                    title: el,
                    src: `/${i}`,
                });
                if (i == secondMenu.onChecked) {
                    keys = acount;
                };
                acount++;
            });
            $scope.secondNavArr = arr;
            $scope.secondInitOn(keys);
        });

        // 二级菜单关闭显示
        let _hide = $rootScope.$on('ComponentTopBar.hide', (ev) => {
            $scope.secondNavArr = [];
        });

        //顶部返回
        let _back = $rootScope.$on('ComponentTopBarFactory.back', (ev, resolve) => {
            $scope.showBack = true;
            $scope.topBackClick = () => {
                resolve();
                $scope.showBack = false;
            };
        });
        // 隐藏顶部返回按钮
        let _hideBack = $rootScope.$on('ComponentTopBarFactory.hideBack', ev => {
            $scope.showBack = false;
        });


        $scope.$on('$destroy', () => {
            _choose();
            _choose = null;
            _hide();
            _hide = null;
            _back();
            _back = null;
            _hideBack();
            _hideBack = null;
        });
    };
};
export default myController;
