const path = require('path');

module.exports = {
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: [".js", ".jsx"]
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", {
                loader: "less-loader",
                options: {
                    javascriptEnabled: true
                }
            }]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: 'url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/',
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: 'url-loader?name=[path][name].[ext]&outputPath=fonts/',
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules|maplib/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        }]
    }
};