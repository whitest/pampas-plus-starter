[__COMMONIMPORT]
interface myInterface extends ng.IServiceProvider {

};

class myService implements myInterface {

    constructor(private $q: ng.IQService, private BaseFactory) {
        'ngInject';
    };

};

export default myService;
