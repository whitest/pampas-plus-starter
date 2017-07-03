/* 详情展示图 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myFactory = function($q) {
    'ngInject';
    const fn = {};
    fn.init = (config) => {
        return $q((resolve, reject) => {
            const normal = {
                type: 'ware',
                style: {},
            };
            const res = angular.merge({}, normal, config);
            resolve(res);
        });
    };

    fn.refresh = (pic) => {
        return $q((resolve, reject) => {
            resolve(pic);
        });
    };

    fn.imgLoad = (pic) => {
        return $q((resolve, reject) => {
            if (!pic) return reject('no pic');
            const img = new Image();
            img.src = pic;
            img.onload = () => resolve(pic);
        });
    };
    return fn;
};

export default myFactory;
