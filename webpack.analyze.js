const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = () => {
  return {
    plugins: [new BundleAnalyzerPlugin()],
  };
};
