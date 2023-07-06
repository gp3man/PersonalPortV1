module.exports = {
  mode: "development",
  entry: ["./client/index.jsx"],
  output: {
    path: __dirname + "/src",
    filename: "bundle.js",
    assetModuleFilename: "src/assets/[hash][ext]",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/src",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|pdf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
