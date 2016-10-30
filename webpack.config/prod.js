const config = require('./base');
// const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack');

config.output = {
  filename: '[name].bundle.[chunkhash].js',
  path: './app/public/prod',
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  // new AssetsPlugin()
];

module.exports = config;
