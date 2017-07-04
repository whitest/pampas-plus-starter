/**
 * baseFactory 结构树
 */


exports = module.exports = {
    /**
     * 当前目录类型
     * @type {String}
     */
    type: 'sumFactory', // 类型
    files: ['sumFacModule', 'factory'], // 当前文件夹自动生成的两个文件
    enforce: ['sumFacModule'], // sumFacModule文件会自动化更新
    description: '公共factory汇总', // 描述，头部备注
    children: { // 子文件夹
        ajax: {
            files: ['module', 'factory', 'config'],
            type: 'factory',
            enforce: ['module'],
            description: '异步接口',
        },
    },
};
