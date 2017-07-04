const gulp = require('gulp');

const cli = require('./cli/tree/tree.constructs.js');

gulp.task('tree', function(){
    cli.constructs()
});
