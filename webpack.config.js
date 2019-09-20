const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const babel = require('babel-polyfill');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./app/index.html",
  filename: "./index.html"
});

module.exports = {
    mode: 'production',
    entry: ["babel-polyfill", "./app/app.js"],
    output: {
        path: path.resolve('dist'),
        filename: 'bundled.js'
    },
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
        },
        {
        test: /\.css$/,
        use: [
            {
            loader: "style-loader"
            },
            {
            loader: "css-loader",
            options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                minimize: true,
                sourceMap: false
            }
            }
        ]
        }
    ]
    },
    plugins: [htmlWebpackPlugin]
};