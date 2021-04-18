const path = require("path");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common")();

const getEnvConfig = (mode) => require(`./webpack.${mode}`)();

const getPresetConfig = (preset) => {
  if (!preset) return {};
  else return require("./webpack.analyze")();
};

module.exports = (env) => {
  return merge(
    {
      mode: env.mode,
    },
    commonConfig,
    getEnvConfig(env.mode),
    getPresetConfig(env.preset)
  );
};
