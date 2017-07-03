/* 核心 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function() {
    'ngInject';
    const fn = {
        value: true,
        clear: () => fn.value,
        clearEvent: (val) => fn.value = val,
    };
    return fn;
};

export default myFactory;
