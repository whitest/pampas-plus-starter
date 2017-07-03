/**
 * 构建开发模板汇总
 */


const gulp = require('gulp');

const config = require('../gulpfile.config.js');
const rootpug = require('./constructs/rootpug/construct.js');


gulp.task('rootpug', () => {
    return rootpug('testest').pipe(gulp.dest(`${config.ROOT_URL}/test`))
})
