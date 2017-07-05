/**
 * 所写的文件类型是否可构建
 */


/**
 * 全部文件类型
 * @type {Array}
 */
const INCLUDE_FILES = [
    'rootModule',
    'rootPug',
    'rootScss',
    'controller',
    'service',
    'config',
    'run',
    'routeLink',
    'importScss',
    'module',
    'routeConfig',
];



exports = module.exports = {

    INCLUDE_FILES,


    /**
     * files是否可构建
     * @param  {String} fileType 文件类型名称
     * @return {Boolean}         是否可构建
     */
    check(fileType) {
        return INCLUDE_FILES.includes(fileType)
    },
};
