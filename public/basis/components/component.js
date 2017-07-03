/* 公共小组件汇总 sumFacModule */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

import Alert from './Alert/Alert.js';
import Confirm from './Confirm/Confirm.js';
import shopLogo from './shopLogo/shopLogo.js';
// import leftMenu from './leftMenu/leftMenu.js';
// import topBar from './topBar/topBar.js';
import navTabs from './navTabs/navTabs.js';
// import msg from './msg/msg.js';
// import shops from './shops/shops.js';
// import userCtrl from './userCtrl/userCtrl.js';
import button from './button/button.js';
import input from './input/input.js';
import radio from './radio/radio.js';
import checkbox from './checkbox/checkbox.js';
import scrollLoad from './scrollLoad/scrollLoad.js';
import textarea from './textarea/textarea.js';
import topBack from './topBack/topBack.js';
import dateTime from './dateTime/dateTime.js';
import table from './table/table.js';
import popicon from './popicon/popicon.js';
// import addCustomer from './addCustomer/addCustomer.js';
// import addMismatch from './addMismatch/addMismatch.js';
import popup from './popup/popup.js';
import advanceFilter from './advanceFilter/advanceFilter.js';
import powerSwitch from './powerSwitch/powerSwitch.js';
import select from './select/select.js';
// import imgUpload from './imgUpload/imgUpload.js';
import normalPic from './normalPic/normalPic.js';
import webcam from './webcam/webcam.js';
import cropper from './cropper/cropper.js';
import uploadAvatar from './uploadAvatar/uploadAvatar.js';
import search from './search/search.js';
import bMap from './bMap/bMap.js';
import popalert from './popalert/popalert.js';
// import changePwd from './changePwd/changePwd.js';
import receipt from './receipt/receipt.js';
import loading from './loading/loading.js';
import contract from './contract/contract.js';
import paging from './paging/paging.js';
import prompt from './prompt/prompt.js';
import componentFactory from './component.factory.js';


const Component = angular
    // .module('Component', [
    //     Alert.name,Confirm.name,shopLogo.name,leftMenu.name,topBar.name,navTabs.name,msg.name,shops.name,userCtrl.name,button.name,input.name,radio.name,checkbox.name,scrollLoad.name,textarea.name,topBack.name,dateTime.name,table.name,popicon.name,addCustomer.name,addMismatch.name,popup.name,advanceFilter.name,powerSwitch.name,select.name,imgUpload.name,normalPic.name,webcam.name,cropper.name,uploadAvatar.name,search.name,bMap.name,popalert.name,changePwd.name,receipt.name,loading.name,contract.name,paging.name,prompt.name
    // ])
    // .factory('ComponentFactory', (ComponentAlertFactory, ComponentConfirmFactory, ComponentLeftMenuFactory, ComponentTopBarFactory, ComponentMsgFactory, ComponentButtonFactory, ComponentInputFactory, ComponentRadioFactory, ComponentCheckboxFactory, ComponentScrollLoadFactory, ComponentTableFactory, ComponentAddCustomerFactory, ComponentAddMismatchFactory, ComponentPopupFactory, ComponentAdvanceFilterFactory, ComponentPowerSwitchFactory, ComponentSelectFactory, ComponentImgUploadFactory, ComponentNormalPicFactory, ComponentWebcamFactory, ComponentCropperFactory, ComponentUploadAvatarFactory, ComponentSearchFactory, ComponentPopalertFactory, ComponentChangePwdFactory, ComponentReceiptFactory, ComponentLoadingFactory, ComponentContractFactory, ComponentPagingFactory, ComponentPromptFactory) => {
    //     'ngInject';
    //     const args = {ComponentAlertFactory, ComponentConfirmFactory, ComponentLeftMenuFactory, ComponentTopBarFactory, ComponentMsgFactory, ComponentButtonFactory, ComponentInputFactory, ComponentRadioFactory, ComponentCheckboxFactory, ComponentScrollLoadFactory, ComponentTableFactory, ComponentAddCustomerFactory, ComponentAddMismatchFactory, ComponentPopupFactory, ComponentAdvanceFilterFactory, ComponentPowerSwitchFactory, ComponentSelectFactory, ComponentImgUploadFactory, ComponentNormalPicFactory, ComponentWebcamFactory, ComponentCropperFactory, ComponentUploadAvatarFactory, ComponentSearchFactory, ComponentPopalertFactory, ComponentChangePwdFactory, ComponentReceiptFactory, ComponentLoadingFactory, ComponentContractFactory, ComponentPagingFactory, ComponentPromptFactory};
    //     return componentFactory(args);
    // });
    .module('Component', [
        Alert.name, Confirm.name, shopLogo.name, navTabs.name, button.name, input.name, radio.name, checkbox.name, scrollLoad.name, textarea.name, topBack.name, popup.name, powerSwitch.name, select.name, normalPic.name, webcam.name, cropper.name, uploadAvatar.name, search.name, popalert.name, advanceFilter.name, receipt.name, loading.name, paging.name, prompt.name, bMap.name, contract.name,dateTime.name,table.name,popicon.name
    ])
    .factory('ComponentFactory', (ComponentAlertFactory, ComponentConfirmFactory, ComponentButtonFactory, ComponentInputFactory, ComponentRadioFactory, ComponentCheckboxFactory, ComponentScrollLoadFactory, ComponentPopupFactory, ComponentAdvanceFilterFactory,ComponentPowerSwitchFactory, ComponentSelectFactory, ComponentNormalPicFactory, ComponentWebcamFactory, ComponentCropperFactory, ComponentUploadAvatarFactory, ComponentSearchFactory, ComponentPopalertFactory, ComponentReceiptFactory, ComponentLoadingFactory, ComponentPagingFactory, ComponentPromptFactory) => {
        'ngInject';
        const args = {
            ComponentAlertFactory,
            ComponentConfirmFactory,
            ComponentButtonFactory,
            ComponentInputFactory,
            ComponentRadioFactory,
            ComponentCheckboxFactory,
            ComponentScrollLoadFactory,
            ComponentPopupFactory,
            ComponentAdvanceFilterFactory,
            ComponentPowerSwitchFactory,
            ComponentSelectFactory,
            ComponentNormalPicFactory,
            ComponentWebcamFactory,
            ComponentCropperFactory,
            ComponentUploadAvatarFactory,
            ComponentSearchFactory,
            ComponentPopalertFactory,
            ComponentReceiptFactory,
            ComponentLoadingFactory,
            ComponentPagingFactory,
            ComponentPromptFactory
        };
        return componentFactory(args);
    });

export default Component;
