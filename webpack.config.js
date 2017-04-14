var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    map: './src/map.js',
    data: './src/export.geojson'
  },
  output: {
      filename: './bundle/[name]-bundle.js',
      library: 'Mapbox'
  },
  node: {
    console: true,
    net: 'empty',
    tls: 'empty'
  },
  module: {
      loaders: [{
          test: /\.json$/,
          loader: 'json-loader'
      },
      {
          test: /\.geojson$/,
          loader: 'json-loader'
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }],
  },
}