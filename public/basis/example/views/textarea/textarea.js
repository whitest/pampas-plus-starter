import angular from 'angular';

const textarea = angular.module('textarea', [])
    .controller('textarea',($scope) => {

        //点击事件
        $scope.clickEvent = () => {
            $scope.textareaShow = $scope.textareaModel;
        };
        //监测数字变化
        $scope.inputChange = () => {
            $scope.maxlength = $scope.lengthValue;
        }
        $scope.lengthValue = 10;
        $scope.maxlength = $scope.lengthValue;
        $scope.topEvent = () => {
            $scope.lengthValue += 1;
            $scope.textareaModel = '';
            $scope.maxlength = $scope.lengthValue;
        }
        $scope.bottomEvent = () => {
            $scope.lengthValue = $scope.lengthValue <= 1 ? $scope.lengthValue = 1 : $scope.lengthValue -= 1;
            $scope.textareaModel = '';
            $scope.maxlength = $scope.lengthValue;
        }

    })

export default textarea;
