/* 切换状态列表 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($rootScope, $scope, $document, ComponentSearchSwitchesFactory) {
        'ngInject';

        $scope.switchesOpenEvent = () => {
            if($scope.isDisabled) return;
            if($scope.switchesList.length < 2) return;
            $scope.switchesListShow = true;
        };

        $scope.switchesChooseEvent = (ev, s) => {
            ev.stopPropagation();
            $scope.switchesOnTitle = s.title;
            $scope.config.switchOnIndex = s.index;
            handler();
            if(!!$scope.config.switchResolve) {
                $scope.config.switchResolve();
            }
        };

        const handler = (ev) => {
            $scope.switchesListShow = false;
        };

        $document.on('click', handler);
        $scope.$on('$destroy', () => {
            $document.off('click', handler);
        });
    };
};
export default myController;
