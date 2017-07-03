/* 店铺列表 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($rootScope, $scope) {
        'ngInject';

        $scope.config = {
            verticalOffset: -5,
            horizontalOffset: 28,
            position: 'bottom-center',
            triggerEvent: 'hover',
            closeOnClickOff: true,
        };

        $scope.mouseleaveEvent = () => $rootScope.$emit('ngDropover.closeAll');
    };
};
export default myController;
