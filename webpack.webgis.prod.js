const prod = require('./webpack.prod.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(prod, {
    entry: './src/webgis/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/webgis')
    },
    plugins: [
        //生成index.html
        new HtmlWebpackPlugin({
            title: "WebGIS 4.2",
            template: "./src/webgis/index.html"
        })
    ]
});