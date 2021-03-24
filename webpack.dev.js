var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.js',
    mode: "development",
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: "Client"
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        open: true
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
              },
              {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        })
    ]

}