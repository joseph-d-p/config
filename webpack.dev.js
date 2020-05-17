const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.development"),
      safe: true
    }),
  ]
});
