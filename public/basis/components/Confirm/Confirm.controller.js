/* 强选择弹窗 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($scope, $rootScope, $timeout, ComponentConfirmFactory, ComponentButtonFactory) {
        'ngInject';

        $scope.cancelEvent = () => {
            const t = $timeout(() => {
                ComponentButtonFactory.removeLoading();
                $timeout.cancel(t);
            }, 500);
            $scope.close();
            $scope.msg = '';
        };

        $scope.maskClickEvent = (ev) => ev.stopPropagation();

        let _confirm = $rootScope.$on('ComponentConfirmFactory.confirm', (ev, obj) => {
            $scope.msg = obj.msg;
            $scope.submitEvent = () => {
                obj.resolve();
                $scope.cancelEvent();
            };
            $scope.open();
        });

        $scope.$on('$destroy', () => {
            _confirm();
            _confirm = null;
        });

    };
};
export default myController;
