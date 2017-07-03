/* 小票收据 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($scope, ComponentReceiptFactory) {
        'ngInject';
        $scope.shopName = JSON.parse(window.sessionStorage.getItem('init'))
            .shopName;
    };
};
export default myController;
