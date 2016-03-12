const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8082',
    'webpack/hot/dev-server',
    './index'
  ],
  output: {
    path: __dirname,
    //path.join(__dirname, 'public'),
    filename: 'bundle.js',
    //publicPath: '/public/'
  },
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
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  }

};