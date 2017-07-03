/**
 * 构建开发模板汇总
 */


const gulp = require('gulp');

const config = require('../gulpfile.config.js');

const rootPug = require('./constructs/rootPug/construct.js');
const rootPug = require('./constructs/rootPug/construct.js');


gulp.task('rootPug', () => {
    return rootPug('testest').pipe(gulp.dest(`${config.ROOT_URL}/test`))
});



gulp.task('rootModule', () => {
    return 
});
