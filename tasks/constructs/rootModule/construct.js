/**
 * 构建单页面 app.ts
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const path = require('path');

const config = require('../constructs.config.js');
const temp = path.join(__dirname, '/template.js');




/**
 * [exports description]
 * @type {Object} opts 配置
 */
exports = module.exports = (opts) => {
    const { COMMON_IMPORT } = config;

    opts._dirArr.forEach(el => {
        modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
    });

    return gulp.src(temp)
        .pipe(replace(/\[__COMMONIMPORT\]/, COMMON_IMPORT))
        .pipe(concat('app.ts'))
};
