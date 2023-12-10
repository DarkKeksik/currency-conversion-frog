import CurrenciesCrypto from './CurrenciesCrypto'

const meta = {
  component: CurrenciesCrypto,
  title: 'widget for currencies (crypto)',
  tags: ['autodocs'],
}

export default meta

export const DefaultProps = {
  args: {
    isWidgetTitle: true,
    hasStatisticBlock: true,
    rowsMax: 5,
    rowsMaxStable: 3,
    rowsMaxCrypto: 3
  },
}

export const CustomProps = {
  args: {
    ...DefaultProps.args,
    widgetTitle: 'Custom name',
    isWidgetTitle: true,
    rowsMaxStable: 2,
    rowsMaxCrypto: 2,
    size: 'm'
  },
}

