import angular from 'angular';

const alert = angular.module('alert', [])
    .controller('alert',($scope,ComponentFactory) => {
      $scope.alertEvent = () => {
        ComponentFactory.alert('hello world!');
      };
    })

export default alert;
