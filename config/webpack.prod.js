var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
   output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].chunk.js'
   },

   plugins: [
      new webpack.optimize.UglifyJsPlugin({
         compress: {
            warnings: false
         },
         sourceMap: true,
         mangle: true
      }),
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      })
   ]
});