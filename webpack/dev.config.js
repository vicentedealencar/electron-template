var webpack = require('webpack');
var config = require("./prod.config.js");
config.devtool = "eval";

config.devServer = {port: 1337};
config.devServer.url = 'http://localhost:' + config.devServer.port;

config.output.publicPath = config.devServer.url + config.output.publicPath;

config.entry.push('webpack-dev-server/client?' + config.devServer.url);
config.entry.push('webpack/hot/only-dev-server');
config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true
    })
]
config.module.loaders[0].loader = "react-hot!babel?stage=0";
config.module.loaders[2].loader = "style-loader!css-loader?sourceMap!autoprefixer-loader"

module.exports = config;
