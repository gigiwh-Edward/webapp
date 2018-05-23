const dev = require('./webpack.dev.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(dev, {
    entry: './src/citygismng/index.jsx',
    plugins: [
        //生成index.html
        new HtmlWebpackPlugin({
            title: "GIS Manager",
            template: "./src/citygismng/index.html"
        })
    ]
});