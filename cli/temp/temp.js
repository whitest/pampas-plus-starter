const fs = require('fs');


const suffix = {
    rootModule: require('./rootModule/suffix.js'),
    rootPug: require('./rootPug/suffix.js'),
};

/**
 * 构建template
 * @param  {Object} opts [description]
 * @return {[type]}      [description]
 */
exports = module.exports = function (opts) {

    const { dirname, filesName, enforce, fileType, dependsArr } = opts;

    fs.open(`${dirname}/${filesName}${suffix[fileType]}`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') return;
        };

        if (!enforce) return;

        if (Array.isArray(enforce)) {
            if (!enforce.includes(fileType)) return;
        };

        console.log(1);
    });
};
