/* 左侧导航菜单 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const icon = C.conf.singleAppMenuIcon;
const myFactory = function($rootScope) {
    'ngInject';
    let menu = []; // 菜单树存储
    const fn = {
        menu: () => menu,
        getLeftMenu: (rows) => {
            angular.forEach(rows, el => el.icon = el.icon ? el.icon : icon[el.menuId]);
            menu = rows;
            $rootScope.$emit('ComponentLeftMenuFactory.menu', menu);
        },
    };

    return fn;
};

export default myFactory;
