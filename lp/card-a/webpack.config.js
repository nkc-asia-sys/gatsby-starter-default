const PATH = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
};