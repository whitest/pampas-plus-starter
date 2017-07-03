import angular from 'angular';

const confirm = angular.module('input', [])
    .controller('input',($scope) => {
          // 监测改变事件
          let num = 0;
          $scope.changeEvent = () => {
              num += 1;
              $scope.inputValue = 'change' + num;
          };
          //enter事件
          $scope.enterEvent = () => {
              $scope.inputValue = 'enter';
              num = 0;
          };
          //焦点事件focus
          $scope.focusEvent = () => {
              $scope.inputValue = 'focus';
              $scope.inputName = '';
              num = 0;
          };
          // 失去焦点事件
          $scope.blurEvent = () => {
              $scope.inputValue = 'blur';
              $scope.inputName = '';
              num = 0;
          };
          //不可点事件
          $scope.flag = 'normal';
          $scope.disableEvent = () => {
              $scope.disabled = !$scope.disabled;
              $scope.flag = $scope.disabled ? 'disabled' : 'normal';
              num = 0;
          }

          //监测数字变化
          $scope.inputChange = () => {
              $scope.maxlength = $scope.lengthValue;
          }
          $scope.lengthValue = 10;
          $scope.maxlength = $scope.lengthValue;
          $scope.topEvent = () => {
              $scope.lengthValue += 1;
              $scope.inputName = '';
              $scope.maxlength = $scope.lengthValue;
          }
          $scope.bottomEvent = () => {
              $scope.lengthValue = $scope.lengthValue <= 1 ? $scope.lengthValue = 1 : $scope.lengthValue -= 1;
              $scope.inputName = '';
              $scope.maxlength = $scope.lengthValue;
          }
    })

export default confirm;
