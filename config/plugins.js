const path = require("path");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "[name].bundle.css",
  chunkFilename: "[id].css",
});

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, ".eslintrc"),
  context: path.resolve(__dirname, "../src"),
  files: "**/*.js",
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/styles'),
  files: '**/*.css',
});

const HtmlConfig = {
  filename: 'index.html',
  template: 'public/index.html'
}

const dotenv = require('dotenv').config( {
  path: path.resolve(__dirname, '../.env')
} );

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  ESLintPlugin: ESLintPlugin,
  CleanWebpackPlugin: new CleanWebpackPlugin(),
  HtmlWebpackPlugin: new HtmlWebpackPlugin(HtmlConfig),
  dotenv:dotenv,
};
