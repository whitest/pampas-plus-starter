import angular from 'angular';

const button = angular.module('button', [])
    .controller('button', ($scope) => {
        //属性介绍
        $scope.descriptList = [{
          title: 'type',
          desc: '按钮类型：first(新增、确定等)、normal(取消、关闭等)、second(收银金钱相关)',
        }, {
          title: 'btn-name',
          desc: 'button文案，默认：确定',
        }, {
          title: 'btn-class',
          desc: 'button私有样式',
        }, {
          title: 'btn-type',
          desc: '默认button(input的type)',
        }, {
          title: 'click',
          desc: '点击事件',
        }, {
          title: 'is-load',
          desc: '判断当前按钮点击后是否进行ajax提交，如果为 true，点击一次后，不可再点，直至ajax后台相应后解除',
        }, {
          title: 'is-unclick',
          desc: '是否可点击',
        }, {
          title: 'is-permission',
          desc: '{bollean} 按钮是否有权限的校验',
        }, {
          title: 'no-permission',
          desc: '如果 isPermission == true，通过 noPermission 来区分是否有权限',
        }];


    })

export default button;
