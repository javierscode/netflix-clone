const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "10",
            },
          },
        ],
        "@babel/preset-react",
      ],
    },
  },
};
const CSSLoader = {
  test: /\.css$/i,
  exclude: [/node_modules/, /\.module\.css$/],
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, "../dist/css/"),
      },
    },

    {
      loader: "css-loader",
      options: { importLoaders: 1 },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
  ],
};

const CSSModuleLodader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
        modules: true,
      },
    },
  ],
  include: /\.module\.css$/,
};

const FileLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        outputPath: "images",
        publicPath: path.resolve(__dirname, "dist/"),
      },
    },
  ],
};
module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader,
  CSSModuleLodader: CSSModuleLodader,
  FileLoader: FileLoader,
};
