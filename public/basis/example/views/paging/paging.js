import angular from 'angular';

const paging = angular.module('paging', [])
    .controller('paging', ($scope) => {
        let limit1 = 10,
            limit2 = 10,
            offset1 = 0,
            offset2 = 0;


        $scope.pageInfo1 = {
            hasPageSize: false,
            show: true,
            total: 50,
            page: 1,
            limit: limit1,
            action: (page) => {
                offset1 = limit1 * (page - 1);
                $scope.current = `第${page}页，当前offset:${offset1}`;
            },
        };

        $scope.pageInfo2 = {
            hasPageSize: true,
            show: true,
            total: 50,
            page: 1,
            limit: limit2,
            action: (page) => {
                offset2 = limit2 * (page - 1);
                $scope.current = `当前limit:${limit2}`;
            },
            sizeResolve: (size) => {
                limit2 = size;
            },
        };
    });

export default paging;
