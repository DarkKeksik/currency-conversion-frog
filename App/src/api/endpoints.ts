/**
 *
 * #############
 * Binance  - https://binance-docs.github.io/apidocs/spot/en/#test-connectivity
 * Bitfinex - https://docs.bitfinex.com/docs
 * Coinbase - https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-users
 * #############
*/

// Roots
export const rootBinance = 'https://api.binance.com/api/v3'
export const rootBitfinex = 'https://api-pub.bitfinex.com/v2'
export const rootCoinbase = 'https://api.coinbase.com/v2'

// Binance endpoints
export const binanceExchangeInfo = `${rootBinance}/exchangeInfo`
export const binanceLatestPriceSymbols = `${rootBinance}/ticker/price`
export const binanceCurrenciesStable = `${rootBinance}/binanceCurrenciesStable`