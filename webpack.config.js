"use strict";
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const templateData = require("./src/data/data.json");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const idProd = !isDev;
const fileName = (ext) => (idProd ? `[name].[hash].${ext}` : `[name].${ext}`);
const cssLoader = (extra) => {
  const loaders = [
    { loader: MiniCssExtractPlugin.loader },
    { loader: "css-loader", options: { url: false } },
  ];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};
module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, "src"),
  entry: "./src/index.js",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: fileName("js"),
  },
  devServer: {
    hot: isDev,
    liveReload: isDev,
    watchFiles: ["src/*.handlebars", "src/data/*.json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoader(),
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader",
        options: {
          runtime: path.resolve(__dirname, "src/helpers/handlebars.js"),
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoader("sass-loader"),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {},
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {},
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/index.handlebars",
      templateParameters: templateData,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: path.resolve(__dirname, "dist/assets") },
        { from: "src/fonts/fonts", to: path.resolve(__dirname, "dist/fonts") },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
};
