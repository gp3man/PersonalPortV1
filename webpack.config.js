module.exports = {
  mode: 'development',
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env", "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|pdf)$/i,
        type: 'asset/resource',
        // generator:{
        //   filename: 'static/[hash][ext][query]'
        // }
      }
    ]
  },
  // plugins:[
  //   new HtmlWebpackPlugin({
  //     title: `Gregory's World`,
  //     filename: 'index.html',
  //     template: 'public/template.html'
  //   })]
}
