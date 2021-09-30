var path = require('path');
var webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: ['./src/Main.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
        library: ['VueMqtt'],
        libraryTarget: 'umd'
    },
    devtool: "source-map",
    module: {
        // rules: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'babel-loader'
        //     }
        // ]
    }
}