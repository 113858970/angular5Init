const webpack = require("webpack");
const config = require("./config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const fs = require("fs");

webpackConfig = {
    entry: {
        vendor: ['./app/js/vendor.ts'],
        index: ['./app/js/index.ts'],
    },
    output: {
        path: config.path.dist,
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /(\.scss)|(\.css)$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
                include: path.resolve(config.path.app)
                    //exclude:/node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]',
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'file-loader?name=font/[name].[ext]'
            }
        ]
    },
    // require 文件时可省略后缀 .js 和 .ts
    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.scss', '.png', '.jpg', '.jpeg', '.gif']
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.DefinePlugin({
            '__env__': config.env === 'development' ? true : false
        })
    ]
};

// var entryFile = fs.readdirSync(path.resolve(config.path.app,`js`));
// entryFile.forEach(item => {
//   var itemName = item.split('.')[0];
//   webpackConfig.entry[itemName] = [path.join(config.path.app, `/js/${item}`)];
//   /*var htmlPlugin = new HtmlWebpackPlugin({
//     filename: `${itemName}.html`,
//     template: `view/${itemName}.html`,
//     chunks: ['common', itemName]
//   });
//   webpackConfig.plugins.push(htmlPlugin);*/

// })
var htmlPlugin = new HtmlWebpackPlugin({
    filename: `index.html`,
    template: `view/index.html`
});
webpackConfig.plugins.push(htmlPlugin);
var templateFile = fs.readdirSync(path.resolve(config.path.app, `template`));
templateFile.forEach(item => {
    var itemName = item.split('.html')[0];
    var htmlPlugin = new HtmlWebpackPlugin({
        filename: `template/${itemName}.html`,
        template: `app/template/${itemName}.html`,
        inject: false
    });
    webpackConfig.plugins.push(htmlPlugin);

})
module.exports = webpackConfig;