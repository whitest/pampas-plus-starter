import angular from 'angular';

const loading = angular.module('loading', [])
    .controller('loading',($scope,ComponentFactory) => {
          $scope.loading = false;
          $scope.loadingEvent = () => {
              $scope.loading = !$scope.loading;
              if($scope.loading){
                  ComponentFactory.loadingOpen();
              }else{
                  ComponentFactory.loadingClose();
              }
          }
    })

export default loading;
