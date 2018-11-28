const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'index': './js/index.js',
    'index-universal': './js/universal.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
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
  }
};
