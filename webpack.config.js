const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputDir = './public';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputDir),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Wechat Duoyue',
      filename: 'index.html',
      template: 'index.template.html',
      //"files": {
      //  "css": [ "common.css" ],
      //  "js": [ "common.js", "bundle.js"],
      //  "chunks": {
      //    "head": {
      //      "entry": "common.js",
      //      "css": [ "style.css" ]
      //    },
      //    "main": {
      //      "entry": "bundle.js",
      //      "css": []
      //    },
      //  }
      //}

    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
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
        loaders: ['style-loader/useable', 'css?root='+__dirname, 'resolve-url', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg|)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test: /\.(woff2?|otf|eot|ttf|wav|mp3|mp4)$/,
        loader: 'url?name=fonts/[name].[ext]'
      }
      //,
      //{
      //  test: /\.json$/,
      //  loader: 'json?name=MockData/[name].[ext]',
      //}
    ]
  },
  postcss: [
    autoprefixer({ browsers: ["last 2 versions"] })
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true
  }

};
