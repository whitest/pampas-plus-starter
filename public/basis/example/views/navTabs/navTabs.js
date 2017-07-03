import angular from 'angular';

const navTabs = angular.module('navTabs', [])
    .controller('navTabs', ($scope) => {
        $scope.nav = [{
            title: '签到',
            index: 1,
        }, {
            title: '签退',
            index: 2,
        }, {
            title: '收银',
            index: 3,
        }];

        $scope.content = '签到模块';
        $scope.navClickEvent = (r) => {
            $scope.content = `${r.title}模块`;
        };
    });

export default navTabs;
