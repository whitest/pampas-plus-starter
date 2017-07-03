import angular from 'angular';

const search = angular.module('search', [])
    .controller('search', ($scope,$timeout) => {
          // search配置1
          $scope.searchConfig1 = {
              width: '300px', // 宽度，如果不设置 默认340px
              placeholder: '手机号查询',
              searchEvent: (value) => {
                  $scope.searchConfig1Value = value;
              },
          };
          // search配置2
          $scope.searchConfig2 = {
              width: '300px',
              isSuggest: true,
              placeholder: '手机号查询',
              searchEvent: (value) => {
                  // 模拟异步获取数据
                  $timeout(() => {
                      $scope.searchConfig2.setSuggestStatusEvent();
                      $scope.searchResultTest = [{
                          name: '张三(15901006419)',
                          type: '次卡',
                          callout: '卡号 HL3892454548',
                      }, {
                          name: '李四(15901006418)',
                          type: '年卡',
                          callout: '卡号 111111111111',
                      }];
                      $scope.searchConfig2.openResultEvent();
                  }, 1000);
              },
          };
          $scope.searchResultTestClickEvent = (r) => {
              $scope.searchConfig2Show = r;
              $scope.searchConfig2.resultChooseResolve(r.name)
              $scope.searchConfig2.closeSuggestEvent();
          };
          // search配置3
          $scope.searchConfig3 = {
              width: '300px',
              isSuggest: true,
              switchOnIndex: '002',
              switchList: [{
                  index: '001',
                  title: '全部',
              },{
                  index: '002',
                  title: '会员',
              },{
                  index: '003',
                  title: '访客',
              }],
              placeholder: '手机号查询',
              searchEvent: (value) => {
                  // 模拟异步获取数据
                  $timeout(() => {
                      $scope.searchConfig3.setSuggestStatusEvent();
                      $scope.searchResult3Test = [{
                          name: '张三(15901006419)',
                          type: '次卡',
                          callout: '卡号 HL3892454548',
                      }, {
                          name: '李四(15901006418)',
                          type: '年卡',
                          callout: '卡号 111111111111',
                      }];
                      $scope.searchConfig3.openResultEvent();
                  }, 1000);
              },
          };
          $scope.searchResultTestClickEvent3 = (r) => {
              $scope.searchConfig3Show = r;
              $scope.searchConfig3.resultChooseResolve(r.name)
              $scope.searchConfig3.closeSuggestEvent();
          };
    })

export default search;
