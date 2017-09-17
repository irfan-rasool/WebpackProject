var webpack = require('webpack');
var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
  "react", "faker", "lodash","react-dom","react-input-range",
  "react-redux", "react-router","redux", "redux-form","redux-thunk"
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] 
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
