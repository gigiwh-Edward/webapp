const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    plugins: [
        //声明生产环境，使第三方模块依据此配置项做优化
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //清理dist
        new CleanWebpackPlugin('dist', {
            exclude: ['maplib']
        })
    ]
});