/**
 * 结构树
 */


exports = module.exports = {
    /**
     * 当前目录类型
     * 当所在Object中没有"files"字段时，
     * 直接根据此参数进行文件构建，
     * 如果包含files字段，
     * 此参数与文件构建无关
     * @type {String}
     * @param {String} 具体参数可参考 './tree.type2files.js'
     */
    type: '',


    /**
     * 当前目录包含文件
     * 设置此参数，
     * 则不再根据Object.type进行文件构建
     * @type {Array}
     * @param {}
     */
    files: [],


    /**
     * 文件名称
     * 如设置此参数，
     * 构建出的文件会命名为该名称，
     * 如不设置，
     * 根据当前Object的名称进行命名
     * @type {String}
     */
    filesName: '',


    /**
     * 每次构建时，强制更新的文件
     * @type {Array} | {Boolean}
     * @param {Boolean}  false表示不强制替换，true表示强制更新文件
     * @param {Array} 数组中包含的文件，会强制更新
     */
    enforce: false,


    /**
     * 目录的描述信息
     * 如果设置次参数，
     * 描述内容会生成一句话注释，写入到文件中
     * @type {String}
     */
    description: '',


    /**
     * 子目录
     * 会生成子目录，
     * 子目录中的文件，会根据依赖关系，写入到引入文件中
     * @type {Object}
     */
    children: {
        // base,
        // component,
        // core,
        app: require('./app/app.js'),
    },
};
