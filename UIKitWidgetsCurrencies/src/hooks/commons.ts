import { useState, useEffect } from 'react'

export const useCryptoAssets = () => {
  const [cryptoAssets, setCryptoAssets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.binance.com/api/v3/exchangeInfo')
      const json = await data.json()
      setCryptoAssets(json?.symbols)
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