var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./dev.config.js');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	historyApiFallback : true,
	hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(config.devServer.port, '0.0.0.0', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:' + config.devServer.port);
});
