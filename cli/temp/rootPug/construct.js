/**
 * 构建单页面 app.pug
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const path = require('path');

const template = path.join(__dirname, '/template.pug');

exports = module.exports = (className) => {
    return gulp.src(template)
        .pipe(replace(/\[__CLASSNAME\]/g, className))
        .pipe(concat('app.pug'))
};