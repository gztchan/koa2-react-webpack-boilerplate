const path = require('path');

module.exports = {
  entry: {
    client: './client/index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
      {
        test: /\.less/,
        loader: 'style!css?modules!less',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      $components: path.resolve(__dirname, '../client/components'),
      $common: path.resolve(__dirname, '../client/components/common'),
      $utils: path.resolve(__dirname, '../client/utils'),
    },
  },
};
