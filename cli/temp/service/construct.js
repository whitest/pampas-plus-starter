/**
 * 构建 angular.service
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const gap = require('gulp-append-prepend');
const path = require('path');
const suffix = require('./suffix.js');

const template = path.join(__dirname, '/template.ts');
const config = require('../temp.config.js');
const { COMMON_IMPORT } = config;

exports = module.exports = (opts) => {

    const { filesName, description } = opts;

    return gulp.src(template)
        .pipe(replace(/\[__COMMONIMPORT\]/, COMMON_IMPORT))
        .pipe(gap.prependText(`/* ${description||''} service */\n`))
        .pipe(concat(`${filesName}${suffix}`));
};
