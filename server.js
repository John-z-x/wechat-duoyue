
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var debug = process.env.NODE_ENV !== 'production';
var viewDir = debug ? 'dist': 'public';
var compiler = webpack(config);
console.log(viewDir);

app.set('port', (process.env.PORT || 8082));
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, viewDir, 'public')));

app.get('*', function (req, res) {
	console.log(req.url);
	res.sendFile(path.join(__dirname, viewDir, 'index.html'));
});

app.listen(app.get('port'), 'localhost', function (err) {
	if (err) {
		console.error(err);
		return;
	}

	console.log('Listening at http://localhost:%s', app.get('port'));
});