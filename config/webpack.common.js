const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const webpack = require('webpack');
const { dotenv } = require('./plugins');

module.exports={
    entry: ["/src/index.js"],
    module: {
        rules: [
            loaders.JSLoader,
            loaders.CSSLoader,
            loaders.CSSModuleLodader,
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
        //plugins.ESLintPlugin,
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin,
        plugins.HtmlWebpackPlugin,
        new webpack.DefinePlugin({"process.env": dotenv.parsed}),
    ],
}