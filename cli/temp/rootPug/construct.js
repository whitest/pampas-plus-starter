/**
 * 构建单页面 app.pug
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const path = require('path');
const suffix = require('./suffix.js');

const template = path.join(__dirname, '/template.pug');

exports = module.exports = (opts) => {

    const { filesName } = opts;

    return gulp.src(template)
        .pipe(replace(/\[__CLASSNAME\]/g, filesName))
        .pipe(concat(`${filesName}.${suffix}`))
};
