/* 弱提示 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';


const className = ['component__popalert_success', 'component__popalert_error'];
const support = {
    transform: 'translateY(100px)',
    webkitTransform: 'translateY(100px)',
    MozTransform: 'translateY(100px)',
};
const noSupport = {
    top: 0,
};

class myController {
    constructor($scope, $rootScope, $q, $interval, $timeout,ComponentPopalertFactory, ComponentButtonFactory) {
        'ngInject';

        // class main {
        //     count = 0;
        //     constructor() {};
        //     defer() {
        //         return $q(resolve => {
        //             this.close();
        //             resolve();
        //         });
        //     };
        //     open(msg, type) {
        //         const t = $timeout(() => {
        //             ComponentButtonFactory.removeLoading();
        //             $timeout.cancel(t);
        //         }, 500);
        //         this.defer()
        //             .then(() => {
        //                 $scope.msg = msg;
        //                 $scope.popAlertType = type;
        //                 $scope.styles = verification.compatCss3.transform ? support : noSupport;
        //                 this.t = $interval(() => {
        //                     if (this.count >= 3) {
        //                         this.close();
        //                     };
        //                     this.count++;
        //                 }, 1000);
        //             });
        //     };
        //     close() {
        //         $scope.msg = '';
        //         $scope.popAlertType = '';
        //         $scope.styles = {};
        //         $interval.cancel(this.t);
        //         this.count = 0;
        //     };
        // };
        //
        // const fn = new main();
        //
        // $scope.closeEvent = () => fn.close();
        //
        // let _success = $rootScope.$on('ComponentPopalert.success', (ev, msg) => {
        //     fn.open(msg, className[0]);
        // });
        //
        // let _error = $rootScope.$on('ComponentPopalert.error', (ev, msg) => {
        //     fn.open(msg, className[1]);
        // });
        //
        // $scope.$on('$destroy', () => {
        //     _success();
        //     _success = null;
        //     _error();
        //     _error = null;
        // })
    };
};
export default myController;
