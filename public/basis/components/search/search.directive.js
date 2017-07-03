/* 搜索框 directive */

import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';


const myDirective = ($rootScope, $compile, $timeout, $document, ComponentSearchFactory, ComponentPopalertFactory) => {
    'ngInject';
    return {
        restrict: 'A',
        replace: true,
        scope: {
            config: '=',
            resolve: '=',
        },
        link: ($scope, elem, attr) => {

            // 创建 searchbox
            const box = $compile('<component-search-box></component-search-box>')($scope);
            elem.addClass('component__search')
                .append(box);

            // 创建 切换列表
            if($scope.config.switchList) {
                const switches = $compile('<component-search-switches></component-search-switches>')($scope);
                elem.append(switches);

            };

            // 创建suggest
            if($scope.config.isSuggest) {
                const suggestDiv = angular.element(elem[0].querySelector('[component-search-suggest]'));
                suggestDiv
                    .addClass('component__search__suggest')
                    .attr('ng-style', 'suggestStyle')
                    .prepend('<div class="component__search__suggest_status" ng-bind="config.suggestStatus" ng-if="!!config.suggestStatus"></div>');

                const resultDiv = angular.element(elem[0].querySelector('[component-search-result]'));

                angular.merge($scope.config, {
                    // 打开/关闭结果展示
                    openResultEvent: () => resultDiv.addClass('open'),
                    closeResultEvent: () => resultDiv.removeClass('open'),
                    closeSuggestEvent: () => {
                        suggestDiv.removeClass('open');
                    }
                });

                elem.on('click', ev => {
                    ev.stopPropagation();
                });
                const handler = ev => {
                    suggestDiv.removeClass('open');
                };
                $document.on('click', handler);
                $scope.$on('$destroy', () => {
                    $document.off('click', handler);
                });

                const t = $timeout(() => {
                    $compile(suggestDiv)($scope);
                    $timeout.cancel(t);
                }, 0);
            };




            // 含有suggest时，监控输入框
            $scope.changeEvent = () => {
                if(!$scope.config.isSuggest) return;

                if(!!$scope.isDisabled) {
                    // $scope.config.suggestStatus = '您没有权限';
                    return;
                };

                const checkAuto = $timeout(() => {
                    // 自动刷卡的校验，如果 80 毫秒内 无法到达3个字符（手动输入），则提示${config.autoError}
                    if($scope.config.isAuto && $scope.searchBox.length <= 3) {
                        $scope.searchBox = '';
                        ComponentPopalertFactory.error($scope.config.autoError);
                    } else {
                        $scope.config.closeResultEvent();
                        $scope.config.suggestStatus = '查询中...';

                        const suggestDiv = angular.element(elem[0].querySelector('[component-search-suggest]'));
                        // 打开或关闭suggest框
                        if(!!$scope.searchBox) {
                            suggestDiv.addClass('open');
                        } else {
                            suggestDiv.removeClass('open');
                        };

                        // 通过 changing = $scope.searchBox ，来判断当前输入框是否正在发生变化，
                        // 如果正在输入，不执行 $scope.config.searchEvent 查询事件
                        let changing = $scope.searchBox;
                        const t = $timeout(function () {
                            if($scope.searchBox == changing) {
                                $scope.config.searchEvent($scope.searchBox);
                                $timeout.cancel(t);
                            };
                        }, 1000);
                    };
                    $timeout.cancel(checkAuto);
                }, 80);
            };

            // 设置无权限
            $scope.config.noPermissionCheck = (noPermission) => {
                if(!$scope.config.isPermission) return;
                $scope.config.noPermission = noPermission;
                if(!!$scope.config.isPermission && !$scope.config.noPermission) {
                    $scope.isDisabled = true;
                };
            };

            $scope.searchEvent = () => $scope.config.searchEvent($scope.searchBox);

            // 变更isDisabled
            $scope.config.changeDisabledEvent = (type) => {
                $scope.isDisabled = type;
                const t = $timeout(() => {
                    if(type) {
                        elem[0].querySelectorAll('.component__search__box_text')[0].value = '';
                    } else {
                        elem[0].querySelectorAll('.component__search__box_text')[0].focus();
                    };
                    $timeout.cancel(t);
                });
            };

            // 初始化
            ComponentSearchFactory.init($scope.config)
                .then(config => {
                    // $scope.placeholder = config.placeholder || '请输入查询内容';
                    elem[0].style.width = config.width;
                    elem[0].style.height = config.height;

                    // 处理一些style，
                    // 如果有switchList，会增加一些特殊样式
                    $scope.boxStyle = {};
                    $scope.suggestStyle = {};
                    // 如果有init value
                    if(!!config.initValue) {
                        $scope.searchBox = config.initValue;
                    };
                    // 如果是可选suggest输入框
                    if(!!config.isSuggest) {
                        // 添加选择结果后的回调方法
                        config.resultChooseResolve = (str = '', isFocus) => {
                            $scope.searchBox = str;
                            if(isFocus) {
                                elem[0].querySelectorAll('.component__search__box_text')[0].focus();
                            };
                        };
                    };
                    if(!!config.switchList) {
                        const w = config.width.slice(0, config.width.indexOf('px'));
                        const h = config.height.slice(0, config.height.indexOf('px'));
                        $scope.suggestStyle = {
                            width: `${w-70}px`,
                            top: `${h-1}px`, //搜索结果列表
                        };
                        $scope.boxStyle = {
                            paddingLeft: '80px',
                        };
                        $scope.swtchesH6Style = {
                            height: `${h-2}px`,
                            lineHeight: `${h-2-20}px`, //swtchesH6 行高
                        };
                        $scope.switchesList = config.switchList;
                        $scope.switchesOnTitle = config.switchesOnTitle || '';

                        config.switchesChoose = (title) => $scope.switchesOnTitle = title;
                    };
                    $scope.config = config;
                    $scope.isDisabled = config.isDisabled;
                });

        },
    };
};

export default myDirective;
