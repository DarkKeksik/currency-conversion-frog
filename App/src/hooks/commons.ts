import { useState, useEffect } from 'react'
import axios from 'axios'

import { endpoints } from '@api'
import { getAssetsWithName } from '@helpers'
import { currenciesCryptoDataFront } from '@data'

export const useCryptoAssets = () => {
  const [cryptoAssets, setCryptoAssets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(endpoints.binanceExchangeInfo)
      // @TODO need move to in TableCurrencies
      const assetsWithName = getAssetsWithName(data?.symbols, currenciesCryptoDataFront)

      setCryptoAssets(assetsWithName)
    }

    fetchData()
      .catch(console.error)
  }, [])

  return cryptoAssets
}

export const useStableCurrencies = () => {
  const [currencies, setCurrencies] = useState([])

  // useEffect(() => {
  //   setCurrencies(Object.values(currenciesStableDataFront))
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(endpoints.binanceCurrenciesStable)

      console.log('#####')
      console.log('Test: ', data)
      console.log('#####')
      setCurrencies(data?.symbols)
    }

    fetchData()
      .catch(console.error)
  }, [])

  return currencies
}

// @TODO It is necessary to remove pagination from the frontend
export const usePaginationData = (data, pageCurrency = 1, limit = 3) => {
  const [totalPages, setTotalPages] = useState<number>()
  const [dataPiece, setDataPiece] = useState([])

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / limit))
  }, [data, limit])

  useEffect(() => {
    const [indexStart, indexEnd] = [
      (pageCurrency - 1) * limit,
      (pageCurrency - 1) * limit + limit
    ]

    setDataPiece(data.slice(indexStart, indexEnd))
  }, [data, pageCurrency, limit])

  return [dataPiece, totalPages]
}