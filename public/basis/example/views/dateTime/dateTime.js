import angular from 'angular';

const dateTime = angular.module('dateTime', [])
    .controller('dateTime',($scope) => {

        // time
        $scope.timeResolve = () => {
            $scope.timeIf = true;
            $scope.timeShow = $scope.time;
        }
        $scope.timeClick = () => {
            $scope.timeDisabled = !$scope.timeDisabled;
        }

        // month
        $scope.monthResolve = () => {
            $scope.monthIf = true;
            $scope.monthShow = $scope.month;
        }
        $scope.minthClick = () => {
            $scope.monthDisabled = !$scope.monthDisabled;
        }

        // dateTime
        $scope.dateTimeResolve = () => {
          $scope.dateTimeIf = true;
          $scope.dateTimeShow = $scope.dateTime;
        }
        $scope.dateTimeClick =() => {
          $scope.dateTimeDisabled = !$scope.dateTimeDisabled;
        }

        // date
        $scope.dateResolve1 = () => {
            $scope.dateIf = true;
            $scope.dateShow = $scope.startDate;
        }
        $scope.dateResolve2 = () => {
            $scope.dateIf = true;
            $scope.dateShow = $scope.endDate;
        }
        $scope.dateClick = () => {
            $scope.dateDisabled = !$scope.dateDisabled;
        }

    })

export default dateTime;
