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
    dataCurrenciesCrypto: [
      {
        name: 'Bitcoin',
        baseAsset: 'BTC/EUR',
      },
      {
        name: 'Ethereum',
        baseAsset: 'ETH/EUR',
      },
      {
        name: 'Tether USDt',
        baseAsset: 'TRX/EUR',
      },
      {
        name: 'Bitcoin',
        baseAsset: 'BTC/EUR',
      },
      {
        name: 'Ethereum',
        baseAsset: 'ETH/EUR',
      },
      {
        name: 'Tether USDt',
        baseAsset: 'TRX/EUR',
      },
    ],
    dataCurrenciesStable: [
      {
        name: 'Russian ruble',
        baseAsset: 'RUB'
      },
      {
        name: 'United States dollar',
        baseAsset: 'USD'
      },
      {
        name: 'Euro',
        baseAsset: 'EUR'
      },
      {
        name: 'Pound sterling',
        baseAsset: 'GBP'
      },
      {
        name: 'Turkish lira',
        baseAsset: 'TRY'
      },
    ],
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

