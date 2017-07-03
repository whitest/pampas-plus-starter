/* loading状态 factory */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myFactory = function($rootScope){
    'ngInject';
    const fn = {
        open(){
            $rootScope.$emit('ComponentLoadingFactory.open')
        },
        close(){
            $rootScope.$emit('ComponentLoadingFactory.close')
        },
    };

    return fn;
};

export default myFactory;
