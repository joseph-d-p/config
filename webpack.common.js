const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|test)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        app: {
          test: /[\\/]src[\\/]/,
          name: "app",
          chunks: "initial"
        },
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-redux|react-select|redux)[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
