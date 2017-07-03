/* 强提示弹窗 factory */
import angular from 'angular';
// import routerLink from 'routerLink';


const myFactory = function($rootScope, $q) {
    'ngInject';
    const fn = {
        alert: (msg) => {
            return $q((resolve, reject) => {
                $rootScope.$emit('ComponentAlertFactory.alert', {
                    msg,
                    resolve
                });
            });
        },
    };

    return fn;
};

export default myFactory;
