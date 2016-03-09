var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8082',
		'webpack/hot/dev-server',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	    resolve: {
      extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot', 'babel'],
			exclude: /node_modules/,
			include: __dirname
		},{
			test: /\.css$/,
			loaders: 'style!css'
		}, {
			test: /\.scss$/,
			loaders: 'style!css!sass'
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: ['image?{bypassOnDebug: true, progressive:true, \
                    optimizationLevel: 3, pngquant:{quality: "65-80", speed: 4}}',
                'url?limit=10000&name=img/[hash:8].[name].[ext]'
                ]
		}, {
       test: /\.(woff|eot|ttf)$/i,
       loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
     }
		]
	}
};