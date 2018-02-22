const path = require('path');
module.exports = {
    entry: {
      main: path.resolve(__dirname, './app/main.js'),
      // global: path.resolve(__dirname, './app/util/funs.js'),
    },
    output: {
        path: path.resolve(__dirname, './'),
        // publicPath:'/js',
        filename: "[name].bundle.js"
    },
    devServer: {
      historyApiFallback: {
        index: "index.html"
      }
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
          }
        }
      ]
    }
};
