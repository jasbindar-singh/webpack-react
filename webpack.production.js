const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    output: {
      filename: "[contenthash].bundle.js", //Content hash for browser caching
      path: path.resolve(__dirname, "dist"), //Path to the build folder
    },
    // Plugins
    plugins: [
      new MiniCssExtractPlugin({
        //To extract css to stanalone file
        filename: "[contenthash].style.css",
      }),
    ],
  };
};
