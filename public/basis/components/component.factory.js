/* 公共小组件汇总 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

const myFactory = function(args) {
    // 'ngInject';
    const fn = {
        alert: args.ComponentAlertFactory.alert,
        popAlert: args.ComponentPopalertFactory.success,
        popError: args.ComponentPopalertFactory.error,
        confirm: args.ComponentConfirmFactory.confirm,
        // topBarBackBtn: args.ComponentTopBarFactory.showBackBtn,
        // hideTopBarBackBtn: args.ComponentTopBarFactory.hideBackBtn,
        // initMenu: args.ComponentTopBarFactory.initMenu,
        // getLeftMenu: args.ComponentLeftMenuFactory.getLeftMenu,
        loadingOpen: args.ComponentLoadingFactory.open,
        loadingClose: args.ComponentLoadingFactory.close,
        removeBtnLoading: args.ComponentButtonFactory.removeLoading,
    };

    return fn;
};

export default myFactory;
