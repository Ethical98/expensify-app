// entry->output
const path = require('path');

console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './src/app.js',
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
  },
};
