import angular from 'angular';

const confirm = angular.module('confirm', [])
    .controller('confirm',($scope,ComponentFactory) => {
          let num = 0;
          $scope.confirmEvent = () => {
              num += 1;
              ComponentFactory.confirm('确认弹窗')
              .then(() => {
                  $scope.confirmResolve = '点击了确认按钮' + num;
              })

          }
    })

export default confirm;
