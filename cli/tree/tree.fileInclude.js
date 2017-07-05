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
    // 'service',
    // 'config',
    // 'run',
    // 'routeConfig'
];


/**
 * files是否可构建
 * @param  {String} fileType 文件类型名称
 * @return {Boolean}         是否可构建
 */
exports = module.exports = {
    INCLUDE_FILES,
    check(fileType) {
        return INCLUDE_FILES.includes(fileType)
    },
};
