import CurrenciesCrypto from './CurrenciesCrypto'

const meta = {
  component: CurrenciesCrypto,
  title: 'widget for currencies (crypto)',
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  args: {
    dataCurrenciesCrypto: [
      {
        name: 'Bitcoin',
        abbreviation: 'BTC/USDT',
        price: 33.839,
        value: 1,
        change: '+3%'
      },
      {
        isSelected: true,
        name: 'Ethereum',
        abbreviation: 'ETH/USDT',
        price: 1781.15,
        value: 2,
        change: '+1%'
      },
      {
        name: 'Tether USDt',
        abbreviation: 'TRX/USDT',
        price: 0.09351,
        value: 1,
        change: '+6%'
      }
    ],
    dataCurrenciesStable: [
      {
        name: 'United States dollar',
        abbreviation: 'USD',
        price: 33.839
      },
      {
        name: 'Euro',
        abbreviation: 'EUR',
        price: 1781.15
      },
      {
        name: 'Pound sterling',
        abbreviation: 'GBP',
        price: 0.09351
      }
    ]
  },
}

export const Secondary = {
  args: {
    ...Primary.args
  },
}

