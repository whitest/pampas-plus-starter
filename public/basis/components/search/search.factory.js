/* 搜索框 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myFactory = function($q) {
    'ngInject';
    const fn = {};

    fn.init = (config = {}) => {
        return $q((resolve, reject) => {
            if (!config.searchEvent) reject('search组件config未设置回调函数');
            const c = {
                width: '340px',
                height: '40px',
            };
            angular.merge(c, config);
            // 设置 SuggestStatus
            if (!config.setSuggestStatusEvent || !angular.isFunction(config.setSuggestStatusEvent)) {
                c.setSuggestStatusEvent = (s) => c.suggestStatus = s;
            };
            // 设置switches
            if (!!config.switchList && angular.isArray(config.switchList) && !!config.switchOnIndex) {
                angular.forEach(config.switchList, el => {
                    if (config.switchOnIndex !== el.index) return;
                    c.switchesOnTitle = el.title;
                });
            };

            resolve(c);
        });
    };

    return fn;
};

export default myFactory;
