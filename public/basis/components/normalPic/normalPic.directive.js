/* 详情展示图 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './normalPic.pug'

const myDirective = ($rootScope, ComponentNormalPicFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            config: '=?',
            refresh: '=?',
        },
        link: ($scope) => {

            // 更新事件
            $scope.refresh = (pic = '') => ComponentNormalPicFactory.refresh(pic)
                .then(pic => {
                    $scope.pic = pic;
                    return pic;
                })
                .then(pic => ComponentNormalPicFactory.imgLoad(pic))
                .then(pic => {
                    $scope.imgStyle = {
                        backgroundImage: `url(${pic})`,
                    };
                })
                .catch(err => {});

            // 初始化
            ComponentNormalPicFactory.init($scope.config)
                .then(config => {
                    $scope.pic = config.pic;
                    $scope.type = config.type;
                    $scope.moduleStyle = config.style;
                    return config.pic;
                })
                .then(pic => ComponentNormalPicFactory.imgLoad(pic))
                .then(pic => {
                    $scope.imgStyle = {
                        backgroundImage: `url(${pic})`,
                    };
                })
                .catch(err => {});
        },

    };
};

export default myDirective;
