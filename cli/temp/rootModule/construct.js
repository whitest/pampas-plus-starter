/**
 * 构建单页面 app.ts
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const path = require('path');

const config = require('../temp.config.js');
const { COMMON_IMPORT } = config;

const suffix = require('./suffix.js');
const template = path.join(__dirname, '/template.ts');

const makeName = require('../temp.makeName.js');



/**
 * [exports description]
 * @type {Object} opts 配置
 */
exports = module.exports = (opts) => {

    const { dependsArr, filesName, dirArr } = opts;

    const IMPORT = [];
    const DEPENDS = [];
    const INJECT = [];

    const _name = makeName(dirArr);

    if (dependsArr.includes('rootScss')) {
        IMPORT.push(`import './${filesName}.root.scss';`);
    };
    if (dependsArr.includes('controller')) {
        IMPORT.push(`import controller from './${filesName}.controller';`);
        INJECT.push(`.controller('${_name}', <ng.IControllerConstructor>controller)`);
    };
    if (dependsArr.includes('service')) {
        IMPORT.push(`import service from './${filesName}.service';`);
        INJECT.push(`.service('${_name}Service', service)`);
    };
    if (dependsArr.includes('config')) {
        IMPORT.push(`import config from './${filesName}.config';`);
        INJECT.push(`.config(config)`);
    };
    if (dependsArr.includes('run')) {
        IMPORT.push(`import run from './${filesName}.run';`);
        INJECT.push(`.run(run)`);
    };


    return gulp.src(template)
        .pipe(replace(/\[__COMMONIMPORT\]/, COMMON_IMPORT))
        .pipe(replace(/\[__IMPORT\]/, IMPORT.join('\n')))
        .pipe(replace(/\[__DEPENDS\]/, DEPENDS.join(', ')))
        .pipe(replace(/\[__INJECT\]/, INJECT.join('\n   ')))
        .pipe(concat(`app${suffix}`));
};
