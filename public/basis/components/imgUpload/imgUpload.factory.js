/* 上传图片组件 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function($q) {
    'ngInject';
    const fn = {};
    fn.init = (config) => {
        const _q = $q.defer();
        if (!config) _q.reject('不能没有config');
        if (!config.imgMax) _q.reject('不能没有图片最大数');

        config.imgInit = config.imgInit || {};
        if (!angular.isObject(config.imgInit)) _q.reject('imgInit 必须是Object map格式');

        let acount = 0;
        angular.forEach(config.imgInit, el => acount++);
        config.acount = acount;
        config.imgInitLength = acount;

        config.imgTitles = config.imgTitles || [];

        config.imgList = {};
        config.imgDropList = {};

        _q.resolve(config)

        return _q.promise;
    }
    return fn;
};

export default myFactory;
