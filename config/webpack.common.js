const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const webpack = require('webpack');

module.exports={
    entry: ["/src/js/app.js"],
    module: {
        rules: [
            loaders.JSLoader,
            loaders.CSSLoader,
            loaders.FileLoader,
        ],
    },
    output:{
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname,"../dist"),
    },
    plugins:[
        new webpack.ProgressPlugin(),
        plugins.CleanWebpackPlugin,
        plugins.ESLintPlugin,
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin,
    ],
}