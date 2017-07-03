/* 下拉框组件 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function($q) {
    'ngInject';
    const fn = {};

    fn.init = (config) => {
        const _q = $q.defer();
        config.words = config.words || 'title';
        _q.resolve(config);
        return _q.promise;
    }

    return fn;
};

export default myFactory;
