import { useState, useEffect } from 'react'

export const useCryptocurrenciesData = () => {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    fetch('https://api.binance.com/api/v3/exchangeInfo')
      .then((data) => data.json())
      .then((data) => {setCurrencies(data.symbols)})
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