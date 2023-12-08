const webpackConfigFront = require('../webpackConfigs/webpack.config')

const config = {
  stories: [
    "../App/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../assets'],
  addons: [
    'storybook-addon-swc',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackConfigFront.resolve.alias
    }

    return config
  }
}

export default config
