const path = require("path");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common")();

const getEnvConfig = (mode) => require(`./webpack.${mode}`)();

module.exports = (env) => {
  return merge(
    {
      mode: env.mode,
    },
    commonConfig,
    getEnvConfig(env.mode)
  );
};
