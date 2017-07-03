/* 强选择弹窗 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function($rootScope, $q) {
    'ngInject';
    const fn = {
        confirm: (msg) => {
            return $q((resolve, reject) => {
                $rootScope.$emit('ComponentConfirmFactory.confirm', {msg, resolve});
            });
        },
    };

    return fn;
};

export default myFactory;
