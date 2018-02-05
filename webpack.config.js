module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      loaders: ['webpack-jsdoc-closure-loader'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loaders: ['webpack-closure-suppress-loader'],
      include: /node_modules/
    }]
  },
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map'
};
