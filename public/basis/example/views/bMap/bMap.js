import angular from 'angular';

const bMap = angular.module('bMap', [])
    .controller('bMap',($scope,$timeout) => {
        //百度地图
        const style = {
                width: '130px',
            },
            words = 'area_name';
        //省
        $scope.shopAreaConfig1 = {
            style: style,
            words: words,
            list: [{
              area_name:'北京',
              area_id:'1',
            },{
              area_name:'上海',
              area_id:'2',
            },{
              area_name:'广州',
              area_id:'3',
            }],
            resolve: (l) => {
                $scope.bMapInitSet(l.area_name);
                $scope.province_code = l.area_id;
                $scope.city_code = '';
                $scope.shopAreaConfig2.list = [{
                    area_name:'朝阳区',
                    area_id:'1',
                },{
                    area_name:'海淀区',
                    area_id:'2',
                },{
                    area_name:'东城区',
                    area_id:'3',
                }];
            },
        };
        //市
        $scope.shopAreaConfig2 = {
            style: style,
            words: words,
            list: [],
            resolve: (l) => {
                $scope.bMapInitSet(l.area_name);
                $scope.city_code = l.area_id;
                $scope.area_code = '';
                $scope.shopAreaConfig3.list = [{
                    area_name:'望京',
                    area_id:'1',
                },{
                    area_name:'酒仙桥',
                    area_id:'1',
                },{
                    area_name:'将台',
                    area_id:'1',
                }]
            },
        };
        //区
        $scope.shopAreaConfig3 = {
            style: style,
            words: words,
            list: [],
            resolve: (l) => {
                $scope.bMapInitSet(l.area_name);
                $scope.area_code = l.area_id;
            },
        };

        $scope.bMapInfo = {
            id: 'editAddress',
        };


    })

export default bMap;
