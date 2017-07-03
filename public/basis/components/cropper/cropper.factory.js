/* 截图功能组件 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myFactory = function($q) {
    'ngInject';
    const fn = {};

    /**
     * 初始化
     * @param  {object} config [$scope.config]
     * @return {object} config [处理后的config]
     */
    fn.init = (config = {}) => {
        return $q((resolve, reject) => {
            // if (!config.resultWidth) reject('cropper 组件 未设置config.resultWidth');
            // if (!config.resultHeight) reject('cropper 组件 未设置config.resultHeight');
            const minSize = {
                w: config.minWidth || 11,
                h: config.minHeight || 11,
            };
            const resultSize = {
                w: config.resultWidth,
                h: config.resultHeight,
            };
            let areaType = config.areaType || 'square';
            if (!!config.aspectRatio) {
                areaType = 'rectangle';
            };
            angular.extend(config, {
                minSize,
                resultSize,
                areaType
            });
            resolve(config);
        });
    };

    return fn;
};

export default myFactory;
