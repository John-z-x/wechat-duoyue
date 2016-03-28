const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//const AUTOPREFIXER_BROWSERS = [
//  'Android 2.3',
//  'Android >= 4',
//  'Chrome >= 20',
//  'Firefox >= 24',
//  'Explorer >= 8',
//  'iOS >= 6',
//  'Opera >= 12',
//  'Safari >= 6'
//];

module.exports = {
  entry: [
    'babel-polyfill',
    './index'
  ],
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'public'),
    publicPath: ''
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.css', { allChunks: true})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname
      },

      {
        test: /\.css$/i,
        exclude: /\.useable\.css$/,
        loader:  'style-loader/useable!css-loader!postcss-loader',
      },
      { test: /\.useable\.css$/, loader: "style/useable!css" },
      {
        test: /\.scss$/,
        loader: 'style-loader/useable!css-loader!postcss-loader!sass-loader',
        include: `includePaths[]=${encodeURIComponent(path.resolve(__dirname, "./sass"))}`
      },  {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
    ]
  },
  postcss: [
    autoprefixer({ browsers: ["last 2 versions"] })
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },
  devServer: {
    historyApiFallback: true
  }

};