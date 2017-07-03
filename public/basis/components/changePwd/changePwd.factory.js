/* 修改密码 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myFactory = function(BaseFactory) {
    'ngInject';
    const fn = {
        authCodeGet: (phone) => {
            return BaseFactory.ajax('authCodeGet', {
                    phone,
                    type: 2,
                })
                .then(data => {
                    return data;
                })
        },
        resetPwd: (params) => {
            return BaseFactory.ajax('resetPwd', params)
                .then(data => {
                    return data;
                })
        },
    };

    return fn;
};

export default myFactory;
