/* 百度地图 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';


import template from './bMap.pug';
import loader from './loader';
import initMap from './initMap';
import {
    defaultOpts,
    defaultOfflineOpts,
    divStyle,
    labelStyle
} from './defaultConf';

const myDirective = ($rootScope, $timeout, $q) => {
    'ngInject';

    class map {
        constructor() {};
        // 无参数
        noParams(element, callback) {};
        // 根据城市跳转到当前位置
        setCityCenter(city, zoom, initAddress, id) {
            if (!this.map) return;
            zoom = zoom || 11;
            this.map.centerAndZoom(city, zoom);
            this.city = city;
            if (!!initAddress) {
                // document.getElementById(id)
                //     .value = initAddress;
                const ac = new BMap.Autocomplete({
                    "input": id,
                    "location": self.map,
                });
                ac.setInputValue(initAddress);
            } else {
                const t = $timeout(() => {
                    this.getAreaList(this.id);
                    $timeout.cancel(t);
                }, 100);
            }
        };
        // 输入框获取地址列表
        getAreaList(id) {
            const self = this;
            if (!self.map) return;
            const t = $timeout(() => {
                const ac = new BMap.Autocomplete({
                    "input": id,
                    "location": self.map,
                });
                const myGeo = new BMap.Geocoder();
                const local = new BMap.LocalSearch(self.map, {
                    onSearchComplete: () => {
                        self.marker = undefined;
                        const pp = local.getResults()
                            .getPoi(0)
                            .point; //获取第一个智能搜索的结果
                        self.map.centerAndZoom(pp, 18);
                        //添加标注
                        self.marker = new BMap.Marker(pp);
                        self.map.addOverlay(self.marker);
                        if (self.isMarkerDrag) {
                            self.marker.enableDragging();
                            self.marker.addEventListener('dragend', (ev) => {
                                const t = $timeout(() => {
                                    self.point = ev.point;
                                    if (self.directCallBack) {
                                        self.directCallBack({
                                            point: self.point,
                                            addressComponents: undefined,
                                        })
                                    };
                                    $timeout.cancel(t);
                                }, 100);
                            });
                        };
                    },
                });
                ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
                    const _value = e.item.value;
                    const value = _value.province + _value.city + _value.district + _value.street + _value.business;
                    const address = _value.street + _value.business;
                    myGeo.getPoint(value, function(point) {
                        if (!point) {
                            // 没有获取到对应的经纬度
                            const t = $timeout(() => {
                                // directAlert.alert('没有获取到对应经纬度，请拖动地图上的标记来获取');
                                self.isMarkerDrag = true;
                                self.map.clearOverlays();
                                self.addressComponents = value;
                                local.search(value);
                                if (self.directCallBack) {
                                    self.directCallBack({
                                        point: undefined,
                                        addressComponents: self.addressComponents,
                                    })
                                };
                                $timeout.cancel(t);
                            }, 100);
                            return;
                        };
                        myGeo.getLocation(point, (rs) => {
                            const t = $timeout(() => {
                                self.point = point;
                                self.addressComponents = rs.addressComponents;
                                if (self.directCallBack) {
                                    self.directCallBack({
                                        point: self.point,
                                        addressComponents: self.addressComponents,
                                    })
                                };
                                $timeout.cancel(t);
                            }, 100);
                        });
                        self.isMarkerDrag = false;
                        self.map.clearOverlays();
                        local.search(value);
                    }, _value.city);
                });
                $timeout.cancel(t);
            }, 0);
        };
        // 初始化地图
        init(element) {
            const self = this;
            loader(() => {
                self.map = initMap(element);
            });
        };
        // 新增页面，初始化
        initNoInfo(id) {
            const self = this;
            let defer = $q.defer();
            defer.promise.then(() => {
                    let myCity = new BMap.LocalCity();
                    myCity.get((res) => {
                        self.map.centerAndZoom(res.name, defaultOpts.zoom);
                    });
                    self.id = id;
                    self.getAreaList(id);
                })
                .catch(() => {
                    const t = $timeout(() => {
                        self.initNoInfo(id);
                        $timeout.cancel(t);
                    }, 100);
                });
            if (!!self.map) {
                defer.resolve();
            } else {
                defer.reject();
            }
        };
        // 编辑页面，自带初始化信息
        initWithInfo(info, callback) {
            const self = this;
            let defer = $q.defer();
            defer.promise.then(() => {
                    self.map.addOverlay(new BMap.Marker(info.point));
                    self.map.centerAndZoom(new BMap.Point(info.point.lng, info.point.lat), 14);
                    // self.getAreaList(self.id);
                    if (!!callback && 'function' == typeof(callback)) {
                        callback();
                    };
                })
                .catch(() => {
                    const t = $timeout(() => {
                        self.initWithInfo(info);
                        $timeout.cancel(t);
                    }, 100);
                });
            self.id = info.id;
            self.getAreaList(info.id, info.address);
            if (!!self.map) {
                // document.getElementById(self.id)
                // .value = info.address;
                defer.resolve();
            } else {
                defer.reject();
            }
        };
    };

    return {
        restrict: 'EA',
        template,
        // replace: true,
        scope: {
            info: '=',
            initWithInfo: '=?',
            initNoInfo: '=?',
            setCityCenter: '=?'
        },
        link: ($scope, element, attrs) => {
            const fn = new map();
            fn.directCallBack = function(obj) {
                $scope.info.point = obj.point || {
                    lat: '',
                    lng: ''
                };
                $scope.info.addressComponents = obj.addressComponents;
                $scope.info.addressInput = document.getElementById($scope.info.id)
                    .value;
            };
            $scope.initWithInfo = function(info, callback) {
                fn.initWithInfo(info, callback);
            };
            $scope.initNoInfo = function(id) {
                fn.initNoInfo(id);
            };
            $scope.setCityCenter = function(city, zoom, initAddress) {
                fn.setCityCenter(city, zoom, initAddress, $scope.info.id);
            };
            $scope.divStyle = divStyle;
            $scope.labelStyle = labelStyle;
            $scope.offlineWords = defaultOfflineOpts.txt;
            fn.init(element);
            fn.initNoInfo($scope.info.id);
        },
    };
};

export default myDirective;
