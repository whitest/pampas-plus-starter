/* 顶部二级菜单导航 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function($timeout, $rootScope, BaseFactory) {
    'ngInject';
    const fn = {
        // 展示返回按钮
        showBackBtn: (resolve) => {
            $rootScope.$emit('ComponentTopBarFactory.back', resolve);
        },

        // 不展示返回按钮
        hideBackBtn: () => {
            $rootScope.$emit('ComponentTopBarFactory.hideBack');
        },

        /**
         *  根据 路由 ，点亮左侧menu对应的icon， 以及顶部二级菜单的展示和选中
         * @param  {Object} views [当前路径在routerLink中对应的对象元素]
         * @return {[type]}       [description]
         */
        initMenu: (views) => {
            fn.hideBackBtn();
            const {
                menuId,
                src
            } = views;

            const main = () => {
                BaseFactory.menuObj()
                    .then(obj => {
                        angular.forEach(obj, (el, i) => {
                            if (i == menuId || el.has(menuId)) {
                                $rootScope.$emit('ComponentLeftMenu.choose', i);
                                if (menuId == src.slice(1)) {
                                    $rootScope.$emit('ComponentTopBar.choose', {
                                        map: el,
                                        onChecked: menuId,
                                    });
                                } else {
                                    $rootScope.$emit('ComponentTopBar.hide');
                                }
                            };
                        });
                    })
                    .catch(err => {
                        if ('continue' == err) {
                            const t = $timeout(() => {
                                main();
                                $timeout.cancel(t);
                            }, 1000);
                        };
                    });
            };
            main();

        },
    };

    return fn;
};

export default myFactory;
