/* 消息通知 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


class myController {
    constructor($rootScope, $scope, ComponentMsgFactory, $sce, $location) {
        'ngInject';

        $scope.config = {
            verticalOffset: -5,
            horizontalOffset: 24,
            position: 'bottom-right',
            triggerEvent: 'hover',
            closeOnClickOff: true,
        };

        const rows = () => {
            //获取消息列表
            let p = {
                offset: 0,
                limit: 10,
            };
            ComponentMsgFactory.messagesGet(p)
                .then(data => {
                    $scope.msgList = data.rows;
                    $scope.msgTotal = data.unreadMessageNum >= 99 ? '99+' : data.unreadMessageNum;
                });
        };
        rows();

        //标记信息全读
        $scope.changMsgAllType = () => {
            ComponentMsgFactory.setAllMessageIsRead()
                .then(data => {
                    rows();
                });
        };

        $scope.mouseleaveEvent = () => $rootScope.$emit('ngDropover.closeAll');

        //查看详情
        $scope.toSearchMsgInfo = (messageShopId) => {
            $rootScope.$emit('ngDropover.closeAll');
            $location.path(`${routerLink.ViewsCommonMsg.src}/${messageShopId}`);
        };


    };
};
export default myController;
