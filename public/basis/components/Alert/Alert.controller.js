/* 强提示弹窗 controller */
import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';


class myController {
    constructor($scope, $rootScope, $timeout, ComponentAlertFactory, ComponentButtonFactory) {
        'ngInject';

        $scope.cancelEvent = () => {
            const t = $timeout(() => {
                ComponentButtonFactory.removeLoading();
                $timeout.cancel(t);
            }, 500);
            $scope.close();
            $scope.msg = '';
        };

        let _alert = $rootScope.$on('ComponentAlertFactory.alert', (ev, obj) => {
            $scope.msg = obj.msg;
            $scope.submitEvent = () => {
                obj.resolve();
                $scope.cancelEvent();
            };
            $scope.open();
        });

        $scope.$on('$destroy', () => {
            _alert();
            _alert = null;
        })
    };
};
export default myController;
