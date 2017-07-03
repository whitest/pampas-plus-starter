/* loading状态 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($scope, $rootScope, ComponentLoadingFactory) {
        'ngInject';

        let _open = $rootScope.$on('ComponentLoadingFactory.open', ev => {
            $scope.show = true;
        });
        let _close = $rootScope.$on('ComponentLoadingFactory.close', ev => {
            $scope.show = false;
        });

        $scope.$on('$destroy', () => {
            _open();
            _open = null;
            _close();
            _close = null;
        });
    };
};
export default myController;
