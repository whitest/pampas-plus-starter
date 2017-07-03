/* 标签页 顶部二级菜单 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './navTabs.pug'

const myDirective = ($rootScope) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            navTabsList: '=',
            initOn: '=?',
            click: '='
        },
        link: ($scope) => {
            $scope.checkedId = 0;
            $scope.navClick = (r, $index) => {
                if ($scope.checkedId == $index)
                    return;
                $scope.checkedId = $index;
                if ($scope.click && typeof($scope.click) === "function") {
                    $scope.click(r);
                };
            };

            // 用于初始化时，默认选中的index，但不执行click事件
            $scope.initOn = (index) => {
                $scope.checkedId = index;
            };
        }
    };
};

export default myDirective;
