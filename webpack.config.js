const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: { 
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            "transform-es2015-for-of"
          ],
          presets: [
            ["env", {
              "targets": {
                "browsers": ["> 0.2%", "not ie <= 10", "not ie_mob > 1"]
              },
              "debug": true
            }]
          ],
          compact: "false",
          comments: "false"
        }
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
     filename: "style.[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: '../index.html'
    })
  ]
};