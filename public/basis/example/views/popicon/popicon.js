import angular from 'angular';
import {
    tools,
    verification,
    conf
} from '../../../core/core.js';

const popicon = angular.module('popicon', [])
    .controller('popicon', ($scope) => {
        $scope.popIconBase = [];
        angular.forEach(conf.popIconBase, (v, k) => {
            $scope.popIconBase.push(angular.extend(v, {
                'type': k
            }));
        });
        console.table($scope.popIconBase);
        console.log(conf.popIconBase);
    });

export default popicon;
