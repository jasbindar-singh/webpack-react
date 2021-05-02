const path = require("path");
const HTMLTemplate = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    entry: {
      main: path.resolve(__dirname, "../src/index.js"), //Entry file's path
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
          test: /\.(scss|css)$/,
          // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"], //Added scss support
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ], //Added scss support
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
        template: path.resolve(__dirname, "../public/main.html"), //Template file path
      }),
      new CleanWebpackPlugin(), //To clean build folder after every build
    ],
  };
};
