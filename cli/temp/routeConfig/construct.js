/**
 * 构建单页面 $routeProvider config
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const path = require('path');
const gap = require('gulp-append-prepend')

const config = require('../temp.config.js');
const { ROUTE_LINK_IMPORT } = config;

const suffix = require('./suffix.js');
const template = path.join(__dirname, '/template.ts');

const makeName = require('../temp.makeName.js');



/**
 * [exports description]
 * @type {Object} opts 配置
 */
exports = module.exports = (opts) => {
    const { children, dirArr, description, filesName } = opts;
    const IMPORT = [];
    const ROUTER = [];
    Object.keys(children || {})
        .forEach((el, key) => {
            if (key === 'cmpt') return;
            const file = el.filesName || key;
            IMPORT.push(`import ${key}Template from './${key}/${file}.pug'\n`);

            const params = (el.routeParams || []).join('/');
            const routeName = makeName(dirArr.push(key)); // routeName只跟文件路径有关，与filesName无关
            let code = `.when(routerLink.${routeName}.src${params}, {\n    `;
            code += `template: ${key}Template,\n    `;
            code += `controller: ${routeName},\n}`;
            ROUTER.push(code);
        });


    return gulp.src(template)
        .pipe(replace(/\[__ROUTELINKIMPORT\]/, ROUTE_LINK_IMPORT))
        .pipe(replace(/\[__IMPORT\]/, IMPORT.join('\n')))
        .pipe(replace(/\[__ROUTER\]/, ROUTER.join('\n')))
        .pipe(gap.prependText(`/* ${description||''} 路由配置 */\n`))
        .pipe(concat(`${filesName}${suffix}`));
};
