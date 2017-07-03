import angular from 'angular';

const select = angular.module('select', [])
    .controller('select',($scope) => {
        $scope.disabled = false;
        $scope.selectConfig = {
            checked: '',
            isDisabled:$scope.disabled,
            style:  {
                width: '130px',
            },
            words: 'name',
            list: [{
              name:'测试一',
              index:1,
            },{
              name:'测试二',
              index:2,
            },{
              name:'测试三',
              index:3,
            }],
            resolve: (l) => {
                $scope.selectValue = l;
            },
        };

    })

export default select;
