const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputDir = './dist';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputDir),
    publicPath: '/assets/'
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
      "files": {
        "css": [ "common.css" ],
        "js": [ "common.js", "bundle.js"],
        "chunks": {
          "head": {
            "entry": "common.js",
            "css": [ "app.scss" ]
          },
          "main": {
            "entry": "bundle.js",
            "css": []
          },
        }
      }

    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('[name].css', {  allChunks: true})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },


      {
        test: /\.css$/i,
        exclude: /\.useable\.css$/,
        loader:  ExtractTextPlugin.extract('style/useable', 'css-loader')

      },
      { test: /\.useable\.css$/, loader: "style/useable!css" },

      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract('style/useable', 'css-loader', 'sass-loader'),
        exclude: path.join(__dirname, 'src'),
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader/useable', 'css?root='+__dirname+'/assets', 'resolve-url', 'sass'],
        exclude: path.join(__dirname, 'assets'),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpe?g|gif|svg|)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test: /\.(woff2?|otf|eot|ttf|wav|mp3|mp4)$/,
        loader: 'url'
      }
      ,
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ["last 2 versions"] })
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', 'json'],
  },
  devServer: {
    historyApiFallback: true
  }

};
