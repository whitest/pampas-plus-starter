/* 日历时间选择组件 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
import {tools, verification} from '../../core/core.js';



class myController {
    constructor($scope, $timeout, $document, $window, ComponentDateTimePickerFactory) {
        'ngInject';
        $scope.openEvent = (ev) => {
            if ($scope.isDisabled) return;
            $scope.show = true;
            const c = ev.target.getBoundingClientRect();
            let top, left, bottom, right;
            if (c.top + 30 + 300 > $window.screen.availHeight) {
                bottom = `${ $window.screen.availHeight - c.bottom - 80}px`;
            } else {
                top = `${c.top + 30}px`;
            };
            if (c.left + 300 > $window.screen.availWidth) {
                right = `${c.right}px`;
            } else {
                left = `${c.left}px`;
            };
            const _style = {
                top: top ? top : 'none',
                left: left ? left : 'none',
                right: right ? right : 'none',
                bottom: bottom ? bottom : 'none',
            };
            $scope.selfStyle = _style;
        };

        $scope.close = () => $scope.show = false;

        // 监测是否触发清空事件
        $scope.clear = () => {
            ComponentDateTimePickerFactory.clearEvent();
            $scope.model = '';
        };

        $scope.picker = (val) => {
            $scope.model = val;
            const t = $timeout(() => {
                $scope.resolve();
                $timeout.cancel(t);
            }, 0);
        };


        const handler = () => {
            const o = $timeout(() => {
                if (!!$scope.target) return;
                $scope.close();
                $timeout.cancel(o);
            }, 100);
        };

        $document.on('click', handler);

        $scope.$on('$destroy', () => {
            $document.off('click', handler);
        })
    };
};
export default myController;
