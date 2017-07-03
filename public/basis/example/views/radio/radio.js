import angular from 'angular';

const radio = angular.module('radio', [])
    .controller('radio',($scope) => {
        // 点击事件
        $scope.radioClick = () => {
            $scope.isChecked = !$scope.isChecked;
        }

        //不可点事件
        $scope.flag = 'normal';
        $scope.disableEvent = () => {
            $scope.disabled = !$scope.disabled;
            $scope.flag = $scope.disabled ? 'disabled' : 'normal';
        }
    })

export default radio;
