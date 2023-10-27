/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../UIKitWidgetsCurrencies/**/*.stories.@(js|jsx|ts|tsx)"
  ],
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
  docs: {
    autodocs: "tag",
  },
};
export default config;
