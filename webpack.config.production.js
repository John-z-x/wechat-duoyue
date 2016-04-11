const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputDir = './public';

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, outputDir),
    publicPath: ''
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      '__DEVTOOLS__': false
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      compressor: {
        warnings: false
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
    new ExtractTextPlugin('app.css', { allChunks: true})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.css$/i,
        exclude: /\.useable\.css$/,
        loader:  'style-loader/useable!css-loader!postcss-loader',
      },
      { test: /\.useable\.css$/, loader: "style/useable!css" },

      {
        test: /\.scss$/,
        loaders: ['style-loader/useable', 'css?root='+__dirname+'/assets/', 'resolve-url', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg|)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test: /\.(woff2?|otf|eot|ttf|wav|mp3|mp4)$/,
        loader: 'url'
      },
      {
        test: /\.json$/,
        loader: 'json?name=MockData/[name].[ext]',
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ["last 2 versions"] })
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  }
};
