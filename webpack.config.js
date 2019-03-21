const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
            },
            {
                test: /\.css|scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                //   { loader: 'style-loader' },
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                 'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ]
}