import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { endpoints } from '@api'
import { currenciesStableDataFront } from '@data'

export const axiosMockAdapter = () => {
  const mock = new MockAdapter(axios)

  mock.onGet(endpoints.binanceCurrenciesStable).reply(200, {
    symbols: Object.values(currenciesStableDataFront)
  })
    .onAny()
    .passThrough();
}