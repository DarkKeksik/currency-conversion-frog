/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../UIKitWidgetsCurrencies/**/*.stories.@(js|jsx|ts|tsx)"
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
  }
}

export default config;
