const path = require("path");
const HTMLTemplate = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"), //Entry file's path
  },
  output: {
    filename: "[name].bundle.js", //Name is the entry prop
    path: path.resolve(__dirname, "dist"), //Path to the build folder
  },
  module: {
    // Loaders
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["url-loader"],
      },
    ],
  },
  // Plugins
  plugins: [
    new HTMLTemplate({
      filename: "index.html", //Output filename
      template: path.resolve(__dirname, "./public/main.html"), //Template file path
    }),
    new CleanWebpackPlugin(), //To clean build folder after every build
  ],
};
