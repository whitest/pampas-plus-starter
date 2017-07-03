/* 分页组件 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import pageSize from './paging.pagesize.js';

class myController {
    constructor($scope, ComponentPagingFactory, $timeout) {
        'ngInject';

        //分页设置
        const t = $timeout(() => {
            $scope.pageSizeInit($scope.pageInfo.limit);
            $timeout.cancel(t);
        }, 0)

        //选择框
        $scope.pageSizeConfig = {
            style: {
                width: '57px',
            },
            list: pageSize,
            resolve: (l) => {
                const t = $timeout(() => {
                    if (!$scope.pageInfo.sizeResolve) return;
                    $scope.pageInfo.sizeResolve(l.index);
                    $scope.pageInfo.limit = l.index;
                    $scope.pageInfo.page = 1;
                    $timeout.cancel(t);
                }, 21);
            },
        };

        //初始化
        $scope.pageInit = (size) => {
            $scope.pageSizeInit(size || $scope.pageInfo.limit);
        };
    };
};
export default myController;
