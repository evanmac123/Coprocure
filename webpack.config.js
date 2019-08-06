const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { 
    main: './src/index-v2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {}
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/home.html',
      filename: '../index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contract.html',
      filename: '../contract.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contracts.html',
      filename: '../contracts.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/about.html',
      filename: '../about.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/careers.html',
      filename: '../careers.html'
    }),
    new MiniCssExtractPlugin({
     filename: "style.[contenthash].css"
    })
  ]
};
