[__COMMONIMPORT]
interface myInterface extends ng.IServiceProvider {

};

class myService implements myInterface {

    constructor(private BaseFactory) {
        'ngInject';
    };

};

export default myService;
