import angular from 'angular';

const normalPic = angular.module('normalPic', [])
    .controller('normalPic', ($scope, $timeout) => {
        /**
         * 默认图片展示
         * @type {Object} picConfig
         * @param {String} type [默认背景图类型，'person' 人，'ware' 商品，如果字段为空，显示商品]
         * @param {Object} style [一些私有样式，传入ng-style中，建议只设置宽高]
         */
        $scope.picConfig2 = {
            style: {
                width: '100px',
                height: '100px',
                borderRadius: '3px',
            },
        };
        $scope.picConfig3 = {
            type: 'person',
        };
        // 模拟详情图片获取更新
        $timeout(() => {
            $scope.picRefresh1('http://p1.qhimg.com/t0128ccabe35bd7817a.jpg');
            $scope.picRefresh2('http://static.oschina.net/uploads/img/201509/02224449_xCWs.jpg');
            $timeout(() => $scope.picRefresh3('http://p1.qhimg.com/t0128ccabe35bd7817a.jpg'), 1000);
        }, 2000);
    });

export default normalPic;
