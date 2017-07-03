/* 搜索框 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($scope, ComponentSearchBoxFactory) {
        'ngInject';

        // 获取焦点事件
        $scope.focusEvent = () => {
            $scope.isFocus = true;
        };

        $scope.blurEvent = () => {
            $scope.isFocus = false;
        };

        //搜索框 监听回车
        $scope.enterEvent = ($event) => {
            if($event.keyCode == 13) $scope.searchEvent();
        };

        // 粘贴事件
        $scope.pasteEvent = (ev) => {
            if($scope.config.isAuto) {
                ev.preventDefault();
            };
        };
    };
};
export default myController;
