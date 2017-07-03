/* 按钮组件 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';


const myFactory = function ($rootScope) {
    'ngInject';
    const fn = {
        removeLoading: () => $rootScope.$emit('ComponentButtonFactory.remove'),
    };

    return fn;
};

export default myFactory;
