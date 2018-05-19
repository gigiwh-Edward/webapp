const prod = require('./webpack.prod.js');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(prod, {
    entry: './src/webgis/index.jsx',
    plugins: [
        //生成index.html
        new HtmlWebpackPlugin({
            title: "WebGIS React",
            template: "./src/webgis/index.html"
        })
    ]
});