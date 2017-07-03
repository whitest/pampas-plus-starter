import angular from 'angular';

const advanceFilter = angular.module('advanceFilter', [])
    .controller('advanceFilter', ($scope) => {

        $scope.filterTotal = 997;

        $scope.advance = {
            advance1: {
                value: '',
                title: '普通筛选:',
                list: [{
                    title: '全部',
                    index: 0,
                }, {
                    title: '筛选项1',
                    index: 1,
                }, {
                    title: '筛选项2',
                    index: 2,
                }],
            },
            advance2: {
                title: '日期范围筛选:',
                type: 'dateArea',
                dataType: 'dateTime',
                centerWords: '至',
                area: {
                    start: {
                        value: '',
                    },
                    end: {
                        value: '',
                    },
                },
            },
            advance3: {
                value: '',
                title: '单一日期筛选:',
                type: 'date',
            },
            advance4: {
                value: '',
                title: '输入框筛选',
                type: 'input',
                btnTitle: '确定',
                before: '超过',
                after: '天未跟进',
            },
        };

        $scope.advanceEvent = () => {
            $scope.show = !$scope.show;
            $scope.advanceTurn();
        };

        $scope.advanceSuccess = () => {
            $scope.advanceParams = {
                value1: $scope.advance.advance1.value,
                value2Start: $scope.advance.advance2.area.start.value,
                value2End: $scope.advance.advance2.area.end.value,
                value3: $scope.advance.advance3.value,
                value4: $scope.advance.advance4.value,
            };
        };
    });

export default advanceFilter;
