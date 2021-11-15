// entry->output
const path = require('path');

module.exports = (env) => {
  const isProduction = env.production === true;

  return {
    entry: './src/app.js',
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    mode: isProduction ? 'production' : 'development',

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
};
