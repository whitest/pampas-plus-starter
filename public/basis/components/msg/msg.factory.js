/* 消息通知 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function(BaseFactory, $sce) {
    'ngInject';
    const fn = {
        messagesGet: (params) => {
            return BaseFactory.ajax('messagesGet', params)
                .then(data => {
                    angular.forEach(data.rows, el => {
                        el.contentShow = $sce.trustAsHtml(el.content)
                    });
                    return data;
                });
        },
        setAllMessageIsRead: () => {
            return BaseFactory.ajax('setAllMessageIsRead')
                .then(data => {
                    return data;
                })
        },
    };

    return fn;
};

export default myFactory;
