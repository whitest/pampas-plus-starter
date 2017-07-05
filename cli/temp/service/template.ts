[__COMMONIMPORT]
interface myInterface extends ng.IComponentController {

};

class myService implements myInterface {

    constructor(private BaseFactory) {
        'ngInject';
    };

};

export default myService;
