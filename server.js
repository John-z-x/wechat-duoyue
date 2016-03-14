var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

var port = 8082;
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	stats: {
		colors: true
	},
	historyApiFallback: {
		index: '/'
	},
	open: true,
	noInfo: true,
});

server.use('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});
		server.listen(port, 'localhost', function(err) {
			if(err) {
				console.log(err);
			}
			console.log('Listening at localhost:' + port);
		});