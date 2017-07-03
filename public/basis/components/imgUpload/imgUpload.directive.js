/* 上传图片组件 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import template from './imgUpload.pug';

const myDirective = ($rootScope, ComponentImgUploadFactory, FileUploader, ComponentFactory) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope: {
            /**
             * [config description]
             * @type {Object} config
             * {
             *      @param {Number} imgMax 图片最大数
             *      @param {Object} imgInit 初始时的默认图片
             *      @param {Object} imgList 新增的图片列表
             *      @param {Object} imgDropList 删除的图片列表
             * }
             */
            config: '=',
            /**
             * [init description]
             * @type {Function} init 初始化图片 config
             */
            init: '=?',
        },
        link: ($scope, elem) => {

            $scope.acount = 0;
            $scope.imgInitLength = 0;

            // 选择图片文件事件
            $scope.chooseFileEvent = () => {
                elem.children('input')[0].click();
            };
            // 单一图片选择后
            $scope.uploader.onAfterAddingFile = (item) => {
                elem.find('input').prop('value', null);
                $scope.acount++;
            };
            // 单一图片上传成功回调
            $scope.uploader.onCompleteItem = (item, response, status, headers) => {
                // console.log(item);
                // console.log(response);
                // console.log(status);
                // console.log(headers);

                if(status !== 200) {
                    // 未成功
                    return;
                };

                if(0 != response.code) {
                    // 后台返回错误，强制提示上传失败
                    item.isError = true;
                    return;
                };

                if(!response.response.rows && !response.response.rows.length) {
                    // 返回的文件数组为空
                    item.isError = true;
                    return;
                };

                if(angular.isString(response.response.rows[0])){
                    // 通常情况下，rows[0] 会是个字符串，
                    // 代表文件名
                    item.imgId = response.response.rows[0];
                    $scope.config.imgList[item.imgId] = true;
                };

                if(angular.isObject(response.response.rows[0])){
                    // 口碑中，rows[0] 是个 map
                    // 其中有url和id
                    item.imgId = response.response.rows[0];
                    $scope.config.imgList[item.imgId.url] = item.imgId;
                };

                item.dropCtrl = true;

            };

            // 删除图片事件
            $scope.dropImgEvent = (item) => {
                // 写在回调函数中
                delete $scope.config.imgList[item.imgId];
                // $scope.config.imgList[item.imgId] = false;
                item.remove();
                $scope.acount--;
            };

            // 删除上传中的图片
            $scope.dropLoadingEvent = (item) => {
                ComponentFactory.confirm('还有照片上传中，确定停止操作吗？')
                    .then(() => {
                        item.remove();
                        $scope.acount--;
                    })
            };

            // 删除排队中的图片
            // $scope.dropReadyEvent = (item) => {
            //     item.remove();
            //     $scope.acount--;
            // };

            // 删除上传失败的图片
            $scope.dropFailEvent = (item) => {
                item.remove();
                $scope.acount--;
            };

            // 重新上传失败的图片
            $scope.imgAfreshEvent = (item) => {
                $scope.uploader.uploadItem(item);
            };

            // 删除初始图片事件
            $scope.dropImgInitEvent = (key) => {
                // 删除图片ajax
                // 下面代码写在回调函数成功中
                delete $scope.config.imgInit[key];
                // $scope.config.imgInit[key] = false;
                $scope.config.imgDropList[key] = true;
                $scope.acount--;
                $scope.imgInitLength--;
            };

            // 给imgInit赋值, 参数为空表示清空
            $scope.init = (initObj = {}) => {
                $scope.config = angular.merge({}, {
                    imgMax: $scope.config.imgMax,
                    imgTitles: $scope.config.imgTitles,
                    apiUrl: $scope.config.apiUrl,
                }, {
                    imgInit: initObj,
                    imgList: {},
                    imgDropList: {},
                });
                $scope.uploader.cancelAll();
                $scope.uploader.clearQueue();
                $scope.acount = 0;
                $scope.imgInitLength = 0;
                angular.forEach(initObj, el => {
                    $scope.acount++;
                    $scope.imgInitLength++;
                });
            };

            // 初始化
            ComponentImgUploadFactory.init($scope.config)
                .then(config => {
                    if(!!config.width) {
                        $scope.imgLiStyle = {
                            width: config.width,
                        };
                    };
                    if(!!config.width || config.height) {
                        $scope.imgDivStyle = {
                            width: config.width,
                            height: config.height,
                        };
                    };
                    $scope.config = config;
                    $scope.imgMax = config.imgMax;
                    $scope.imgInitLength = config.imgInitLength;
                    $scope.acount = config.acount;
                    $scope.imgTitles = config.imgTitles;
                });

        },
        controller: 'ComponentImgUpload',
    };
};

export default myDirective;
