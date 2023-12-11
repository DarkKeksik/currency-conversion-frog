import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { endpoints } from '@api'
import { currenciesStableDataFront } from '@data'

export const axiosMockAdapter = () => {
  const mock = new MockAdapter(axios)

  const keysCurrenciesStableDataFront = Object.keys(currenciesStableDataFront)
  const mockDataCurrenciesStable = keysCurrenciesStableDataFront.map((key) => (
    { baseAsset: key.toUpperCase(), ...currenciesStableDataFront[key] }
  ))

  mock.onGet(endpoints.binanceCurrenciesStable).reply(200, {
    symbols: Object.values(mockDataCurrenciesStable)
  })
    .onAny()
    .passThrough();
}