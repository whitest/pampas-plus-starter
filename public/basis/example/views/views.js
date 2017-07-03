import angular from 'angular';

import colors from './colors/colors';
import colorsTemp from './colors/colors.pug';

import bMap from './bMap/bMap.js';
import bMapTemp from './bMap/bMap.pug';

import alert from './alert/alert.js';
import alertTemp from './alert/alert.pug';

import button from './button/button.js';
import buttonTemp from './button/button.pug';

import dateTime from './dateTime/dateTime.js';
import dateTimeTemp from './dateTime/dateTime.pug';

import checkbox from './checkbox/checkbox.js';
import checkboxTemp from './checkbox/checkbox.pug';

import confirm from './confirm/confirm.js';
import confirmTemp from './confirm/confirm.pug';

import input from './input/input.js';
import inputTemp from './input/input.pug';

import loading from './loading/loading.js';
import loadingTemp from './loading/loading.pug';

import prompt from './prompt/prompt.js';
import promptTemp from './prompt/prompt.pug';

import radio from './radio/radio.js';
import radioTemp from './radio/radio.pug';

import popalert from './popalert/popalert.js';
import popalertTemp from './popalert/popalert.pug';

import select from './select/select.js';
import selectTemp from './select/select.pug';

import textarea from './textarea/textarea.js';
import textareaTemp from './textarea/textarea.pug';

import search from './search/search.js';
import searchTemp from './search/search.pug';

import navTabs from './navTabs/navTabs.js';
import navTabsTemp from './navTabs/navTabs.pug';

import normalPic from './normalPic/normalPic.js';
import normalPicTemp from './normalPic/normalPic.pug';

import paging from './paging/paging.js';
import pagingTemp from './paging/paging.pug';

import popup from './popup/popup.js';
import popupTemp from './popup/popup.pug';

import uploadAvatar from './uploadAvatar/uploadAvatar.js';
import uploadAvatarTemp from './uploadAvatar/uploadAvatar.pug';

import contract from './contract/contract.js';
import contractTemp from './contract/contract.pug';

import advanceFilter from './advanceFilter/advanceFilter.js';
import advanceFilterTemp from './advanceFilter/advanceFilter.pug';

import table from './table/table.js';
import tableTemp from './table/table.pug';

import popicon from './popicon/popicon.js';
import popiconTemp from './popicon/popicon.pug';

import imgUpload from './imgUpload/imgUpload.js';
import imgUploadTemp from './imgUpload/imgUpload.pug';

const views = angular
    .module('views', [colors.name, button.name, bMap.name, alert.name, dateTime.name, checkbox.name, confirm.name, input.name, loading.name, prompt.name, radio.name, popalert.name, select.name, textarea.name, search.name, navTabs.name, normalPic.name, paging.name, popup.name, uploadAvatar.name, contract.name, advanceFilter.name, table.name, popicon.name, imgUpload.name])
    .config(($routeProvider) => {
        'ngInject';
        $routeProvider
            .when('/colors', {
                template: colorsTemp,
                controller: 'colors',
            })
            .when('/alert', {
                template: alertTemp,
                controller: 'alert',
            })
            .when('/bMap', {
                template: bMapTemp,
                controller: 'bMap',
            })
            .when('/button', {
                template: buttonTemp,
                controller: 'button',
            })
            .when('/dateTime', {
                template: dateTimeTemp,
                controller: 'dateTime',
            })
            .when('/checkbox', {
                template: checkboxTemp,
                controller: 'checkbox',
            })
            .when('/confirm', {
                template: confirmTemp,
                controller: 'confirm',
            })
            .when('/input', {
                template: inputTemp,
                controller: 'input',
            })
            .when('/loading', {
                template: loadingTemp,
                controller: 'loading',
            })
            .when('/prompt', {
                template: promptTemp,
                controller: 'prompt',
            })
            .when('/radio', {
                template: radioTemp,
                controller: 'radio',
            })
            .when('/popalert', {
                template: popalertTemp,
                controller: 'popalert',
            })
            .when('/select', {
                template: selectTemp,
                controller: 'select',
            })
            .when('/textarea', {
                template: textareaTemp,
                controller: 'textarea',
            })
            .when('/search', {
                template: searchTemp,
                controller: 'search',
            })
            .when('/navTabs', {
                template: navTabsTemp,
                controller: 'navTabs',
            })
            .when('/normalPic', {
                template: normalPicTemp,
                controller: 'normalPic',
            })
            .when('/paging', {
                template: pagingTemp,
                controller: 'paging',
            })
            .when('/popup', {
                template: popupTemp,
                controller: 'popup',
            })
            .when('/uploadAvatar', {
                template: uploadAvatarTemp,
                controller: 'uploadAvatar',
            })
            .when('/contract', {
                template: contractTemp,
                controller: 'contract',
            })
            .when('/advanceFilter', {
                template: advanceFilterTemp,
                controller: 'advanceFilter',
            })
            .when('/table', {
                template: tableTemp,
                controller: 'table',
            })
            .when('/popicon', {
                template: popiconTemp,
                controller: 'popicon',
            })
            .when('/imgUpload', {
                template: imgUploadTemp,
                controller: 'imgUpload',
            })
    })

export default views;
