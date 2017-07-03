/* 用户退出登录 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($rootScope, $scope, BaseFactory, $location, ComponentFactory, $timeout) {
        'ngInject';
        $scope.config = {
            verticalOffset: -5,
            position: 'bottom-center',
            triggerEvent: 'hover',
            closeOnClickOff: true,
        };
        $scope.mouseleaveEvent = () => $rootScope.$emit('ngDropover.closeAll');

        //登录人头像
        $scope.picConfig = {
            style: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
            },
            type: 'person',
        };

        //获取用户信息
        const init = () => {
            const init = window.sessionStorage.getItem('init');
            if (!init) return;
            const obj = JSON.parse(init);
            $scope.adminName = obj.adminName;
            $scope.avatar = obj.avatar ? `${BaseFactory.imgHost}${obj.avatar}` : '';
        };
        init();

        //修改密码
        $scope.restPassword = () => $rootScope.$broadcast('componentUserCtrl.openChangePwd');

        //退出登录
        $scope.signOut = () => {
            ComponentFactory.confirm('是否确认退出')
                .then(() => {
                    BaseFactory.ajax('logout')
                        .then(data => {
                            window.sessionStorage.removeItem('init');
                            window.location.href = `${C.conf.urls.localhost}login.html`;
                        });
                });

        };

        const t = $timeout(() => {
            $scope.picRefresh($scope.avatar);
            $timeout.cancel(t);
        }, 0)


    };
};
export default myController;
