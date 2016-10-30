const config = require('./base');

config.output = {
  filename: '[name].bundle.js',
  path: './app/public/dev',
};

config.devtool = 'eval';

module.exports = config;
