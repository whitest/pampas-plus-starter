/* 生成头像功能 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myFactory = function($q) {
    'ngInject';
    const fn = {};

    // 初始化
    fn.init = (config = {}) => {
        return $q((resolve, reject) => {
            resolve(config);
        });
    };

    return fn;
};

export default myFactory;
