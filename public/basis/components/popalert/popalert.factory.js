/* 弱提示 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myFactory = function($rootScope) {
    'ngInject';
    const fn = {
        success: (msg) => {
            $rootScope.$emit('ComponentPopalert.success', msg)
        },

        error: (msg) => {
            $rootScope.$emit('ComponentPopalert.error', msg)
        },
    };

    return fn;
};

export default myFactory;
