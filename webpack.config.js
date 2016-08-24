'use strict';

// import Webpack plugins
var cleanPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

// We need to seperate out the css from the js bundle...
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// define Webpack configuration object to be exported
var config = {
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(eot|svg|ttf)$/,
            loader: 'file'
        }, {
            test: /\.js?$/,
            include: __dirname + '/app',
            loader: 'babel'
        }, {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: [/node_modules/]
        }, ],
        preLoaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'jshint'
        }]
    },
    plugins: [
        // new cleanPlugin(['dist']),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ExtractTextPlugin('css/vendor.css', {
            allChunks: true
        })
    ]
};

module.exports = config;
