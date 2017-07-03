const webpack = require('webpack');
const path = require('path');
const argv = require('yargs')
    .argv;
const WebpackDevServer = require("webpack-dev-server");
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const obj = {
    entry: {
        app: [
            path.join(__dirname, '/app/app.ts'),
        ],
        // common: [
        //     path.join(__dirname, '/base/base'),
        // ]
    },
    output: {
        publicPath: "/",
        path: path.join(__dirname, '/built'),
        filename: '[name].js'
    },
    devtool: !!argv.env.mylocal ? 'eval-source-map' : false,
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }],
            },
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.ts'],
        alias: {
            moment: path.join(__dirname, '/app/basis/base/js/moment.2.10.6.js'),
        },
    },
    externals: {},
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            minimize: false,
            beautify: true,
            mangle: false,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        new HtmlWebpackPlugin({
            title: '潘帕斯健身房系统基础组件示例',
            filename: 'app.html',
            template: path.join(__dirname, 'app/app.pug'),
            inject: 'body',
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            },
            hash: true,
            chunks: ['common', 'app'],
        }),
    ],
};

module.exports = function (env) {
    return obj;
}
