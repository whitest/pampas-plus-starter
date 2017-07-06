/**
 * 构建 routeLink
 * 只有 root 用到
 * 所有路由所需要的 路径[|权限，menuID]，都在这里生成
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const gap = require('gulp-append-prepend');
const path = require('path');
const suffix = require('./suffix.js');
const err = require('../../tree/tree.error.js');

const template = path.join(__dirname, '/template.ts');
const config = require('../temp.config.js');
const { COMMON_IMPORT } = config;

/**
 * 核心，通过递归tree，遍历，
 * 如果 dependsArr 包含 routeConfig，
 * 生成代码，来插入到构建文件中
 * @param  {[type]} tree [description]
 * @return {[type]}      [description]
 */
function core(tree) {
    if(tree)
};

exports = module.exports = (opts) => {

    const { filesName, description, dependsArr, dirname } = opts;

    if (!dependsArr.includes('rootModule')) {
        err(`非root路径想要构建 routeLink 文件   (文件名：${filesName}，路径：${dirname})`);
        return;
    };

    return gulp.src(template)
        .pipe(gap.prependText(`/* ${description||''} 全部路由路径汇总 */\n`))
        .pipe(concat(`${filesName}${suffix}`));

};
