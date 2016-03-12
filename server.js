var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = 8082;
var compiler = webpack(config);
new WebpackDevServer(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	stats: {
		colors: true
	},
	historyApiFallback: true,
	open: true,
	noInfo: true,
}).listen(port, 'localhost', function(err) {
			if(err) {
				console.log(err);
			}

			console.log('Listening at localhost: 8082');
		});