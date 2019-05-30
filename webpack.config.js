const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
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
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: true } }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
            options: {
              sourceMap: false
            }
          },
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
      template: './src/search.html',
      filename: '../search.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/record.html',
      filename: '../search/record.html'
    }),
    new MiniCssExtractPlugin({
     filename: "style.[contenthash].css"
    })
  ]
};
