const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const srcDir = 'src'
const distDir = 'dist';
module.exports = {
    entry: `./${srcDir}/index.js`,
    devServer: {
        hot: true,
        port: 4000,
        index: './index.html'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'sketch.js',
        path: path.resolve(__dirname, distDir)
    }
};