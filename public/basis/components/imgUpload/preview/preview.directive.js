/* 展示预览图 directive */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myDirective = ($rootScope, $timeout, BaseFactory) => {
    'ngInject';
    return {
        restrict: 'A',
        scope: {
            ifile: '=',
        },
        link: ($scope, elem) => {
            const t = $timeout(() => {
                BaseFactory.readFile($scope.ifile)
                    .then(base64 => elem.css('background-image', `url(${base64})`));
                $timeout.cancel(t);
            }, 0);
        },

    };
};

export default myDirective;
