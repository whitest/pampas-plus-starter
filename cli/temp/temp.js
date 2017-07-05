const fs = require('fs');
const gulp = require('gulp');
const fileInclude = require('../tree/tree.fileInclude.js');
const gulpConfig = require('../../gulpfile.config.js');





const allTemps = (function () {
    const m = {};
    fileInclude.INCLUDE_FILES.forEach(el => m[el] = {
        construct: require(`./${el}/construct`),
        suffix: require(`./${el}/suffix`),
    });
    return m;
}());



/**
 * 构建template 核心代码
 * @param  {[type]} opts [description]
 * @return {[type]}      [description]
 */
function core(opts) {

    const { dirname, fileType } = opts;

    const dirArr = dirname.slice(gulpConfig.ROOT_URL.length).split('/'); // 文件路径，push到一个数组中

    Object.assign(opts, dirArr);

    allTemps[fileType].construct(opts)
        .pipe(gulp.dest(dirname));
};


/**
 * 构建template
 * @param  {Object} opts [description]
 * @return {[type]}      [description]
 */
exports = module.exports = function (opts) {

    const { dirname, filesName, enforce, fileType, dependsArr } = opts;

    fs.open(`${dirname}/${filesName}${allTemps[fileType].suffix}`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                core(opts);
                return;
            };
        };

        // enforce == false 不强制替换
        if (!enforce) return;

        // 如果是  enforce is Array, 没有 fileType 元素，不强制替换
        if (Array.isArray(enforce)) {
            if (!enforce.includes(fileType)) return;
        };

        core(opts);

    });
};
