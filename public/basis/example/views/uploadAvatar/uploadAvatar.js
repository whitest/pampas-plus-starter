import angular from 'angular';

const uploadAvatar = angular.module('uploadAvatar', [])
    .controller('uploadAvatar', ($scope) => {
        $scope.avatarConfig = {
            init: 'http://p1.qhimg.com/t0128ccabe35bd7817a.jpg',
        };
    });

export default uploadAvatar;
