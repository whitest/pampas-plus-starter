/* 生成头像功能 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import template from './uploadAvatar.pug'

const myDirective = ($rootScope, $timeout, ComponentUploadAvatarFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            config: '=?',
            avatar: '=',
        },
        link: ($scope) => {

            // 初始化
            ComponentUploadAvatarFactory.init($scope.config)
                .then(config => {
                    angular.merge($scope.config, {
                        refresh: (pic = '') => {
                            const t = $timeout(() => {
                                $scope.picRefresh(pic);
                                $timeout.cancel(t);
                            }, 0);
                        },
                    });
                    if (!!config.init) {
                        const t = $timeout(() => {
                            $scope.picRefresh(config.init);
                            $timeout.cancel(t);
                        }, 0);
                    };
                })
                .catch(err => {});
        },
        controller: 'ComponentUploadAvatar',
    };
};

export default myDirective;
