/* 滑动开关组件 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function($q) {
    'ngInject';
    const fn = {};

    fn.init = (config) => {
        const _q = $q.defer();

        if (!config.titleLeft) {
            _q.reject('未设置switch true时的文案');
        };
        if (!config.titleRight) {
            _q.reject('未设置switch false时的文案');
        };
        if (!config.clickEvent || !angular.isFunction(config.clickEvent)) {
            _q.reject('switch 回调事件不正确');
        };

        // 当前 选中的 文案
        config.titleOn = config.isChecked ? config.titleLeft : config.titleRight;

        _q.resolve(config);
        return _q.promise;
    }

    return fn;
};

export default myFactory;
