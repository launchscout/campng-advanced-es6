module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' },

       // **IMPORTANT** This is needed so that each bootstrap js file required by
       // bootstrap-webpack has access to the jQuery object
       { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

       // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
       // loads bootstrap's css.
       { test: /\.(woff|woff2)$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }

    ]
  }
};
