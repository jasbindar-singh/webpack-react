const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = () => {
  return {
    output: {
      filename: "[name].bundle.js", //Name is the entry prop
      path: path.resolve(__dirname, "dist"), //Path to the build folder
    },
    // Plugins
    plugins: [
      new MiniCssExtractPlugin({
        //To extract css to stanalone file
        filename: "main.css",
      }),
      new HotModuleReplacementPlugin(),
    ],
  };
};
