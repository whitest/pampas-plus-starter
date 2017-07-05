/* app service */
import * as angular from 'angular';
import * as C from 'core';

interface myInterface extends ng.IServiceProvider {

};

class myService implements myInterface {

    constructor(private BaseFactory) {
        'ngInject';
    };

};

export default myService;
