/**
 * 构建局部页面 .ts
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const path = require('path');
const gap = require('gulp-append-prepend')

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

    const { dependsArr, filesName, dirArr, children, description } = opts;

    const IMPORT = [];
    const DEPENDS = [];
    const INJECT = [];

    const _name = makeName(dirArr); // 模块名

    Object.keys(children || {}).forEach((el, key) => {
        const name = el.filesName || key;
        IMPORT.push(`import ${name} from "./${el}/${el}";`);
        DEPENDS.push(`${name}.name`);
    });

    IMPORT.concat(); // 字幕录中的ts，加载进来

    if (dependsArr.includes('controller')) {
        IMPORT.push(`import controller from './${filesName}.controller';`);
        INJECT.push(`.controller('${_name}', <ng.IControllerConstructor>controller)`);
    };
    if (dependsArr.includes('service')) {
        IMPORT.push(`import service from './${filesName}.service';`);
        INJECT.push(`.service('${_name}Service', service)`);
    };
    if (dependsArr.includes('factory')) {
        IMPORT.push(`import factory from './${filesName}.factory';`);
        INJECT.push(`.factory('${_name}Factory', factory)`);
    };
    if (dependsArr.includes('config') || dependsArr.includes('routeConfig')) {
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
        .pipe(replace(/\[__NAME\]/g, _name))
        .pipe(gap.prependText(`/* ${description||''} 主要 module */\n`))
        .pipe(concat(`${filesName}${suffix}`));
};
