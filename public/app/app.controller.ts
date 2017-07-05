/* app controller */
import * as angular from 'angular';
import * as C from 'core';

interface myInterface extends ng.IController {

};

class myController implements myInterface {

    _service: ng.IControllerService;

    constructor(private $scope: ng.IScope, private ComponentFactory, private BaseFactory, private appService: ng.IControllerService) {
        'ngInject';
        this._service = appService;
    };

};

export default myController;
