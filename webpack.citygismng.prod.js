const prod = require('./webpack.prod.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(prod, {
    entry: './src/citygismng/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/citygismng')
    },
    plugins: [
        //生成index.html
        new HtmlWebpackPlugin({
            title: "GIS Manager",
            template: "./src/citygismng/index.html"
        })
    ]
});