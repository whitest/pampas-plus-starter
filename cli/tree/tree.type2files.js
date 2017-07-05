/**
 * tree 中的 type 字段，
 * 设置后，默认构建对应的文件
 */


/**
 * 所有类型
 * @type {Object}
 */
const allTypes = {


    /**
     * [app description]
     * @type {Array}
     */
    app: ['rootModule', 'rootPug', 'rootScss', 'controller', 'service', 'config', 'run', 'routeLink'],


    /**
     * [route description]
     * @type {Array}
     */
    route: ['importScss', 'module', 'routeConfig'],

};

exports = module.exports = async function (type) {
    return new Promise(function (resolve, reject) {
        if (!allTypes.hasOwnProperty(type)) {
            reject(`type错误类型：${type}`);
        } else {
            resolve(allTypes[type]);
        }
    });
};
