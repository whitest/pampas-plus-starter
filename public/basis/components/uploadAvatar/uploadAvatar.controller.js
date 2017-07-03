/* 生成头像功能 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($scope, ComponentUploadAvatarFactory) {
        'ngInject';

        $scope.picConfig = {
            type: 'person',
            style: {
                width: '103px',
                height: '103px',
            },
        };

        // // 初始化
        // ComponentUploadAvatarFactory.init($scope.config)
        //     .then(config => {
        //         if (!!config.init) {
        //             $scope.picRefresh(config.init);
        //         };
        //     })
        //     .catch(err => {});

        $scope.picResolve = (base64) => {
            $scope.picRefresh(base64);
            $scope.avatar = base64;
        };

    };
};
export default myController;
