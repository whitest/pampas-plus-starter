/* 上传图片组件 controller */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

class myController {
    constructor($scope, ComponentImgUploadFactory, FileUploader) {
        'ngInject';
        const {
            conf: {
                urls
            }
        } = C;
        $scope.uploader = new FileUploader({
            // url: urls.href + ($scope.config.apiUrl || 'commonMultiUpload'),
            url: '',
            autoUpload: true,
        });

        // 图片存放地址（理论后台动态返回）
        // TODO: 地址写在 conf 中
        $scope.imageHost = 'http://7xnztu.com2.z0.glb.qiniucdn.com/';

    };
};
export default myController;
