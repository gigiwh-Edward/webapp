const dev = require('./webpack.dev.js');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(dev, {
    entry: './src/webgis/index.jsx',
    plugins: [
        //生成index.html
        new HtmlWebpackPlugin({
            title: "WebGIS React",
            template: "./src/webgis/index.html"
        })
    ]
});