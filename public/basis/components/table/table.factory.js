/* 表格组件 factory */
import angular from 'angular';
// import routerLink from 'routerLink';
// import * as C from 'core';
import {tools, verification,conf} from '../../core/core.js';

// const {
//     conf: {
//         popIconBase
//     }
// } = C;

const {
    popIconBase
} = conf;

const myFactory = function ($q) {
    'ngInject';

    const fn = {
        initData: (config) => {
            const _q = $q.defer();
            if(!config) {
                _q.reject('还未设置table config');
            };
            if(!config.head || !angular.isObject(config.head)) {
                _q.reject('表头部分数据不正确');
            };
            if(!config.mainKey) {
                _q.reject('未设置主键');
            };
            if(!!config.checkbox && !!config.radio) {
                _q.reject('单选功能和多选功能不能同时存在');
            };
            if(!!config.radio && !angular.isObject(config.radioChecked)) {
                _q.reject('单选功能开启，必须含有radioChecked对象');
            };
            if(!!config.checkbox && !angular.isArray(config.checkboxChecked)) {
                _q.reject('多选功能开启，必须含有checkboxChecked数组');
            };
            if(!!config.control && !angular.isArray(config.control)) {
                _q.reject('操作功能control必须是数组');
            };
            // checkbox初始化
            if(!!config.checkbox && !!config.checkboxChecked.length) {
                const key = {};
                angular.forEach(config.checkboxChecked, c => {
                    key[c[config.mainKey]] = true;
                });
                angular.forEach(config.body, b => {
                    if(!key[b[config.mainKey]]) return;
                    b.tableChecked = true;
                });
            };
            // 操作区域初始化
            // if (!!config.control && !!config.control.length) {
            //     angular.forEach(config.control, c => angular.merge(c, popIconBase[c.type]));
            // };

            // 字段匹配
            const fields = [];
            // 包含超链接事件的列
            const links = {};
            // 包含滑动开关的列
            const powerSwitches = {};
            // 照片列表
            const pics = {};
            // 教练分组 tag
            const coachTag = {};
            // 需省略字段
            const ellipsis = {};

            angular.forEach(config.head, (el, i) => {
                fields.push(i);
                if(!!el.links && angular.isArray(el.links)) {
                    links[i] = el.links;
                };
                if(!!el.powerSwitch) {
                    powerSwitches[i] = true;
                };
                if(!!el.pictrueConfig && angular.isObject(el.pictrueConfig)) {
                    pics[i] = el.pictrueConfig;
                };
                if(el.coachTag) {
                    coachTag[i] = true;
                };
                if(el.ellipsis) {
                    ellipsis[i] = true;
                };
            });
            config.fields = fields;
            config.links = links;
            config.powerSwitches = powerSwitches;
            config.pics = pics;
            config.coachTag = coachTag;
            config.ellipsis = ellipsis;


            _q.resolve(config);
            return _q.promise;
        },

        /**
         * @param {object} body [tbody数据]
         * @param {object} pics [thead中含有pictrueConfig的字段的合集（通常一个列表只有一个）]
         * @return {object} body [处理后的body]
         */
        getPics: (body, pics) => {
            angular.forEach(pics, (el, i) => angular.forEach(body, ele => ele[`${i}PictrueConfig`] = angular.merge({}, el, {
                pic: ele[i],
            })));
            return body;
        },
    };

    return fn;
};

export default myFactory;
