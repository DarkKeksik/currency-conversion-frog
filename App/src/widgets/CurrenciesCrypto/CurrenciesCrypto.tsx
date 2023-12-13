import React, { FC, useEffect, useState } from 'react'

import { IconDoubleArrows, IconSearch } from '@Icons'
import { axiosMockAdapter, endpoints } from '@api'
import { filterArrByValueKey } from '@helpers'
import { AnimationSlideTo } from '@Animations'
import { hooksCommon } from '@hooks'
import {
  TableCurrencies,
  TableCurrenciesParts,
  WidgetTitle,
  StatisticCharts,
  Input
} from "@Components"

import * as Styled from './CurrenciesCrypto.styled'

// @TODO Needs to be moved to a reusable type file
type TSizes = 's' | 'm' | 'l'

type TCurrenciesCrypto = {
  widgetTitle: string,
  isWidgetTitle?: boolean,
  rowsMax?: number,
  rowsMaxStable?: number,
  rowsMaxCrypto?: number
  isVisibleStatisticCharts?: boolean
  hasStatisticBlock?: boolean
  size?: TSizes
}

// Mocks for temporarily non-existent api methods
axiosMockAdapter()

const CurrenciesCrypto: FC<TCurrenciesCrypto> = ({
  widgetTitle,
  isWidgetTitle = true,
  rowsMax = 5,
  rowsMaxStable,
  rowsMaxCrypto,
  isVisibleStatisticCharts,
  hasStatisticBlock,
  size
}) => {
  const currenciesCrypto = hooksCommon.useCryptoAssets()
  const currenciesStable = hooksCommon.useStableCurrencies()

  const [currenciesCryptoFiltered, setCurrenciesCryptoFiltered] = useState(currenciesCrypto)
  const [currenciesStableFiltered, setCurrenciesStableFiltered] = useState(currenciesCrypto)

  useEffect(() => {
    setCurrenciesStableFiltered(currenciesStable)
  }, [currenciesStable])

  useEffect(() => {
    setCurrenciesCryptoFiltered(currenciesCrypto)
  }, [currenciesCrypto])

  // @TODO need useReducer or something else for this state
  const [ dataTables, setDataTables ] = useState([])
  const [ dataStatistic, setDataStatistic ] = useState({
    title: 'Changes "BTC/EUR',
    subtitle: 'over 6 months',
    items: ['25119.40 USD', '34974.40 USD'],
    rateChange: '15.3%'
  })

  const [isVisibleStatistic, setIsVisibleStatistic] = useState(isVisibleStatisticCharts)

  useEffect(() => {
    setDataTables([
      {
        title: 'World currencies',
        inputSearchIcon: <IconSearch fill='#fff' size={14} />,
        inputSearchPlaceholder: 'Search',
        inputSearchType: 'string',
        inputSearchCallback: (value) => {
          const currenciesStableFiltered =
            filterArrByValueKey(currenciesStable, value, ['baseAsset', 'name'])
          setCurrenciesStableFiltered(currenciesStableFiltered)
        },
        dataCurrencies: currenciesStableFiltered,
        rowsMax: rowsMaxStable || rowsMax
      },
      {
        title: 'Cryptocurrencies',
        inputSearchIcon: <IconSearch fill='#fff' size={14} />,
        inputSearchPlaceholder: 'Search',
        inputSearchType: 'string',
        inputSearchCallback: (value) => {
          const currenciesCryptoFiltered =
            filterArrByValueKey(currenciesCrypto, value, ['baseAsset', 'name'])
          setCurrenciesCryptoFiltered(currenciesCryptoFiltered)
        },
        dataCurrencies: currenciesCryptoFiltered,
        onPagination: () => {},
        rowsMax: rowsMaxCrypto || rowsMax
      }
    ])
  }, [
    rowsMaxCrypto,
    rowsMaxStable,
    rowsMax,
    currenciesCrypto,
    currenciesStable,
    currenciesCryptoFiltered,
    currenciesStableFiltered
  ])

  const getStatistic = (isVisible) => {
    setIsVisibleStatistic(isVisible)

    // @TODO axios
    fetch(`${endpoints.binanceLatestPriceSymbols}?symbols=["BTCRUB"]`)
      .then((data) => data.json())
  }

  const onClickChangeTables = () => {
    setDataTables([dataTables[1], dataTables[0]])
    setIsVisibleStatistic(false)
  }

  return (
    <Styled.Wrap size={size}>
      {isWidgetTitle && <WidgetTitle title={widgetTitle ?? 'Cryptocurrency converter'} />}

      <Styled.WrapTables>
        <TableCurrencies
          dataItems={dataTables[0]?.dataCurrencies}
          rowsMax={dataTables[0]?.rowsMax}
          isSelectedDefault
        >
          <TableCurrenciesParts.TableHead>
            <b>{dataTables[0]?.title}</b>
            <Input
              Icon={dataTables[0]?.inputSearchIcon}
              type={dataTables[0]?.inputSearchType}
              placeholder={dataTables[0]?.inputSearchPlaceholder}
              sideEffects={dataTables[0]?.inputSearchCallback}
            />
          </TableCurrenciesParts.TableHead>
        </TableCurrencies>

        <Styled.ButtonChangeTable onClick={onClickChangeTables}>
          <IconDoubleArrows size={25} fill='#d1d6dd' />
        </Styled.ButtonChangeTable>

        <TableCurrencies
          dataItems={dataTables[1]?.dataCurrencies}
          rowsMax={dataTables[1]?.rowsMax}
          handlerItem={getStatistic}
          multiSelect
          hideInput
        >
          <TableCurrenciesParts.TableHead>
            <b>{dataTables[1]?.title}</b>
            <Input
              Icon={dataTables[1]?.inputSearchIcon}
              type={dataTables[1]?.inputSearchType}
              placeholder={dataTables[1]?.inputSearchPlaceholder}
              sideEffects={dataTables[1]?.inputSearchCallback}
            />
          </TableCurrenciesParts.TableHead>
        </TableCurrencies>
      </Styled.WrapTables>

      {hasStatisticBlock && isVisibleStatistic && (
        <AnimationSlideTo>
          <StatisticCharts
            title='Growth charts'
            dataDescription={dataStatistic}
          />
        </AnimationSlideTo>
      )}
    </Styled.Wrap>
  )
}

export default CurrenciesCrypto