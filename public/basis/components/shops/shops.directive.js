/* 店铺列表 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './shops.pug'

const myDirective = ($rootScope, BaseFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {},
        link: ($scope) => {


            //判断是否是超管 0 超级管理员 1 普通  1不显示连锁
            const initLevel = () => {
                const init = window.sessionStorage.getItem('init');
                if (!init) return;
                const obj = JSON.parse(init);
                $scope.level = obj.level;
                $scope.shopName = obj.shopName;
            };
            initLevel();

            //获取店铺列表
            BaseFactory.ajax('brandOtherShopsGet')
                .then(data => {
                    $scope.shopList = data.rows;
                });

            //去连锁
            $scope.toChainShop = () => window.location.href = `${C.conf.urls.localhost}chainApp.html`;

            //点击去单店
            $scope.toSingleShop = (shopId) => {
                BaseFactory.ajax('singleStoreLogin', {
                        shopId: shopId,
                    })
                    .then(data => {
                        BaseFactory.setStorage(data);
                        window.location.href = `${C.conf.urls.localhost}singleApp.html`;
                    });
            };
        },
        controller: 'ComponentShops',
    };
};

export default myDirective;
