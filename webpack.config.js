var webpack = require("webpack");
module.exports = {
//  entry: './app/assets/frontend/main.jsx',
//  output: {
//    path: __dirname + '/app/assets/javascripts',
//    filename: 'bundle.js'
//  },
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
    })
  ]
}
