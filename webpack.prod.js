const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.production"),
      safe: true,
      silent: true
    })
  ]
});
