const path = require('path');

module.exports = {
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
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
            include: path.resolve(__dirname, 'src'),
            use: ["style-loader?sourceMap=true", "css-loader?modules&localIdentName=[local]-[hash:base64:5]"]
        }, {
            test: /\.less$/,
            exclude: path.resolve(__dirname, 'src'),
            use: ["style-loader", "css-loader", "less-loader?javascriptEnabled=true&sourceMap=true"]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: 'url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/',
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: 'url-loader?name=[path][name].[ext]&outputPath=fonts/',
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules|maplib/,
            use: 'babel-loader'
        }]
    }
};