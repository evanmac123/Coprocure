const path = require('path');
module.exports = {
  mode: 'production',
  entry: { 
    main: './src/index-es5.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'transpiled-build.js'
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
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
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
  }
};