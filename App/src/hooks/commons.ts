import { useState, useEffect } from 'react'
import axios from 'axios'

import { endpoints } from '@api'

export const useCryptoAssets = () => {
  const [cryptoAssets, setCryptoAssets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(endpoints.binanceExchangeInfo)
      setCryptoAssets(data?.symbols)
    }

    fetchData()
      .catch(console.error)
  }, [])

  return cryptoAssets
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