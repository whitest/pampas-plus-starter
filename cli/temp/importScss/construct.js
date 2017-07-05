/**
 * 构建单页面 app.root.scss
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const gap = require('gulp-append-prepend')
const path = require('path');
const suffix = require('./suffix.js');
const type2files = require('../../tree/tree.type2files.js');

const template = path.join(__dirname, '/template.scss');

exports = module.exports = (opts) => {

    const { filesName, description, children } = opts;

    const IMPORT = Object.keys(children).map(el => `@import "./${el}/${el}";`);

    return gulp.src(template)
        .pipe(replace(/\[__IMPORT\]/g, IMPORT.join('\n')))
        .pipe(gap.prependText(`/* ${description||''} 引入 scss */\n`))
        .pipe(concat(`${filesName}${suffix}`));
};
