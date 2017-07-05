[__COMMONIMPORT]
interface myInterface extends ng.IController {

};

class myController implements myInterface {

    _service: ng.IControllerService;

    constructor(private $scope: ng.IScope, private ComponentFactory, private BaseFactory, [__INJECT]) {
        'ngInject';
        this._service = [__SERVICENAME];
    };

};

export default myController;
