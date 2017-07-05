/**
 * 根据路径， 给模块命名
 */


/**
 * 根据路径， 给模块命名
 * 小驼峰规则
 * @type {Array} dirArr 路径所生成的数组
 *                      例如 /public/app/ => ['public', 'app'];
 *
 * @return {String}     小驼峰的name
 */
exports = module.exports = (dirArr) => {
    const n = dirArr.map((el, i) => {
        if (i === 0) return el;
        return el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
    });
    return n.join();
};
