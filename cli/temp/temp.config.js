/**
 * constructs 一些配置
 */


exports = module.exports = {
    /**
     * [COMMONIMPORT description]
     * 通用的import
     * 基本每个ts文件都会引用
     * @type {String}
     */
    COMMON_IMPORT: `import * as angular from 'angular';\nimport * as C from 'core';\n`,


    /**
     * [ROUTE_LINK_IMPORT description]
     * 路由的头部引用
     * @type {String}
     */
    ROUTE_LINK_IMPORT: `import * as routeLink from 'routeLink';\n`,

};
