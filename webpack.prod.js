var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/server/index.js',
    mode: "production",
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: "Client"
    },
    module: {
        rules: [
            {
                test: "/.js$/",
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