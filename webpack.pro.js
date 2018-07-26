const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const config = require("./config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const prefixUrl = process.env.BUILD_ENV == 'prod' ? '__URL_PLACEHOLDER__/' : '/'

webpackConfig.output = {
  path: config.path.dist,
  filename: 'js/[name].js',
  // 后面的反斜杠(/)要加上
  publicPath: prefixUrl
}

webpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_debugger: true,
      drop_console: true,
      warnings: false,
    },
    comments: false,
  }),
  new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })

)
module.exports = webpackConfig;

