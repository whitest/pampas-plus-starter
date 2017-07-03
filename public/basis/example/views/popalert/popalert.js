import angular from 'angular';

const popalert = angular.module('popalert', [])
    .controller('popalert', ($scope, ComponentFactory) => {
        //成功信息提示
        $scope.popAlert = () => {
            ComponentFactory.popAlert('成功信息');

        };
        //错误
        $scope.popError = () => {
            ComponentFactory.popError('错误信息');
        };
    })

export default popalert;
