/**
 * 构建 angular.controller
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
const makeName = require('../temp.makeName.js');

exports = module.exports = (opts) => {

    const { filesName, description, dirArr } = opts;
    const _name = makeName(dirArr);
    const INJECT = [];
    INJECT.push(`private ${_name}Service: ng.IControllerService`);

    return gulp.src(template)
        .pipe(replace(/\[__COMMONIMPORT\]/, COMMON_IMPORT))
        .pipe(replace(/\[__SERVICENAME\]/, `${_name}Service`))
        .pipe(replace(/\[__INJECT\]/, INJECT.join(', ')))
        .pipe(gap.prependText(`/* ${description||''} controller */\n`))
        .pipe(concat(`${filesName}${suffix}`));
};
