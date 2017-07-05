/**
 * 构建单页面 app.ts
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const path = require('path');

const config = require('../temp.config.js');
const suffix = require('./suffix.js');
const template = path.join(__dirname, '/template.ts');




/**
 * [exports description]
 * @type {Object} opts 配置
 */
exports = module.exports = (opts) => {
    const { COMMON_IMPORT } = config;

    const { dependsArr, filesName } = opts;

    const IMPORT = [];
    const DEPENDS = [];
    const INJECT = [];

    if (dependsArr.includes('rootScss')) {
        IMPORT.push(`import './${filesName}.root.scss';`);
    };


    return gulp.src(template)
        .pipe(replace(/\[__COMMONIMPORT\]/, COMMON_IMPORT))
        .pipe(replace(/\[__IMPORT\]/, IMPORT.join('\n')))
        .pipe(replace(/\[__DEPENDS\]/, DEPENDS.join(', ')))
        .pipe(replace(/\[__INJECT\]/, INJECT.join('\n')))
        .pipe(concat(`app${suffix}`));
};
