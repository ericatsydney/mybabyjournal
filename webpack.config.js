var webpack = require("webpack");
module.exports = {
//  entry: './app/assets/frontend/main.jsx',
//  output: {
//    path: __dirname + '/app/assets/javascripts',
//    filename: 'bundle.js'
//  },

//Main configuration object for project
  entry: {
    app: './resources/assets/js/app.js',
    vendor: ['react', 'react-dom']
  },

  output: {
    path: require('path').resolve('./public/js'),
    filename: 'app.js'
  },

  devTool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["es2015", "react", "stage-0"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.bundle.js'})
  ]
}
