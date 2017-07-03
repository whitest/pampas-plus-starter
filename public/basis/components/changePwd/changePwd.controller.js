/* 修改密码 controller */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';

let r;

class myController {
    constructor($scope, ComponentChangePwdFactory, $interval, ComponentFactory, $timeout) {
        'ngInject';


        //拿到用户手机号
        const init = window.sessionStorage.getItem('init');
        let obj = JSON.parse(init);
        $scope.phone = obj.phone;

        //获取验证码
        $scope.getCodeWord = '获取验证码';
        $scope.getCodeRefuse = false;
        $scope.getCodeEvent = () => {
            if (!!$scope.getCodeRefuse) return;

            ComponentChangePwdFactory.authCodeGet($scope.phone)
                .then(data => {
                    ComponentFactory.popAlert('验证码发送成功，请注意查收');
                    $scope.getCodeRefuse = true;
                    let i = 60;
                    $scope.getCodeWord = `${i}s`;
                    i = 60 - 1;
                    r = $interval(function() {
                        if (0 == i) {
                            $scope.getCodeRefuse = false;
                            $scope.getCodeWord = '获取验证码';
                            $interval.cancel(r);
                            return;
                        }
                        $scope.getCodeWord = i + 's';
                        i--;
                    }, 1000);
                })
        };

        $scope.pwdresetSubmit = () => {
            let p = {
                phone: $scope.phone,
                password: $scope.pwd,
                authCode: $scope.authCode,
            };
            if (!p.phone) {
                ComponentFactory.popError('请输入手机号');
                return;
            };
            if (!C.verification.isTel(p.phone)) {
                ComponentFactory.popError('手机号格式不正确');
                return;
            };
            if (!p.authCode) {
                ComponentFactory.popError('请输入验证码');
                return;
            };
            if (!$scope.pwd) {
                ComponentFactory.popError('请输入密码');
                return;
            };
            if (!$scope.pwdTwice) {
                ComponentFactory.popError('请输入确认密码');
                return;
            };
            if (!C.verification.isEqual($scope.pwd, $scope.pwdTwice)) {
                ComponentFactory.popError('输入的两次密码不相同');
                return;
            };

            ComponentChangePwdFactory.resetPwd(p)
                .then(data => {
                    ComponentFactory.popAlert('修改密码成功');
                    $scope.close();
                    const t = $timeout(() => {
                        window.sessionStorage.removeItem('init');
                        window.location.href = `${C.conf.urls.localhost}login.html`;
                        $timeout.cancel(t);
                    }, 3000);
                });
        };

        $scope.popClear = () => {
            $scope.authCode = '';
            $scope.pwd = '';
            $scope.pwdTwice = '';
            // $interval.cancel(r);
            $scope.getCodeWord = '获取验证码';
            $scope.getCodeRefuse = false;
        };

        //监听打开事件
        let openChangePwd = $scope.$on('componentUserCtrl.openChangePwd', () => $scope.open());

        $scope.$on('$destroy', () => {
            openChangePwd();
            openChangePwd = null;
        });
    };
};
export default myController;
