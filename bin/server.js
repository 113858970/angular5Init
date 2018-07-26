const config = require('../config');
const chalk = require('chalk');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');
const path = require("path");

// port
const PORT = config.port;

//env
const env = config.env;

//hot module
for(var key in webpackConfig.entry){
  webpackConfig.entry[key].unshift(
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/dev-server');
}
// for dev
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackConfig.plugins.push(new webpack.NoErrorsPlugin());


// compiler
var compiler = webpack(webpackConfig);

var devServerOptions = {
  disableHostCheck: true,
  contentBase: config.path.dist,
  hot: true,
  historyApiFallback: false,
  noInfo: true,
  stats: {
    colors: true
  }
};
if (config.proxy) {
  devServerOptions.proxy = config.proxy;
}
// // run
var server = new webpackDevServer(compiler, devServerOptions);

server.listen(PORT, () => {
  console.log(`[${chalk.green('INFO')}] Server run at ${chalk.yellow.underline('http://127.0.0.1:' + PORT)}`);
});

