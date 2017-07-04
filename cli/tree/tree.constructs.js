/**
 * 构建
 */

const path = require('path');
const chalk = require('chalk');
const gulpConfig = require('../../gulpfile.config.js');
const tree = require('./tree.js');
const type2files = require('./tree.type2files.js');
const err = require('./tree.error.js');




/**
 * 对tree构建
 * @param {Object} tree 目录结构树
 * @param {String} filesName 文件的名称，tree.filesName 或 tree的 key
 * @param {String} dirname 绝对路径
 */
function constructs(tree, filesName, dirname) {

    if (tree.children) {
        if ('[object Object]' !== tree.children.toString()) {
            err(`${filesName}中children类型有误`)
            return;
        };
        Object.keys(tree.children).forEach(name => constructs(tree.children[name], name, path.join(dirname, name)));
    };


    if (dirname === gulpConfig.ROOT_URL) return;


    let files = [];

    if (Array.isArray(tree.files)) {
        if (tree.files.length === 0) {
            err(`${filesName}中files数组为空`);
        };
        files = tree.files;
    } else if (!type2files.hasOwnProperty(tree.type)) {
        err(`${filesName}中type类型不常见（type类型：${tree.type}）`);
    } else {
        files = type2files[tree.type];
    };




};



exports = module.exports = {
    constructs() {
        constructs(tree, null, gulpConfig.ROOT_URL)
    },
};
