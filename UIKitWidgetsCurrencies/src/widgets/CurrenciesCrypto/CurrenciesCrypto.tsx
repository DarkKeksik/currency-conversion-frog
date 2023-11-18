import React, { FC, useState } from 'react'

import { TableCurrencies, TableCurrenciesParts, WidgetTitle, StatisticCharts, Input } from '../../components'
import { IconDoubleArrows } from '../../icons'
import * as Styled from './CurrenciesCrypto.styled'

type TCurrenciesCrypto = {
  widgetTitle: string,
  isWidgetTitle?: boolean,
  dataCurrenciesCrypto: any,
  dataCurrenciesStable: any,
  rowsMax?: number,
  rowsMaxStable?: number,
  rowsMaxCrypto?: number
  isVisibleStatisticCharts?: boolean
}

const CurrenciesCrypto: FC<TCurrenciesCrypto> = ({
    dataCurrenciesCrypto,
    dataCurrenciesStable,
    widgetTitle,
    isWidgetTitle = true,
    rowsMax = 5,
    rowsMaxStable,
    rowsMaxCrypto,
    isVisibleStatisticCharts
}) => {
  const [ dataDescription, setDataDescription ] = useState({
    title: 'Changes "BTC/EUR',
    subtitle: 'over 6 months',
    items: ['25119.40 USD', '34974.40 USD'],
    rateChange: '+15.3%'
  })

  return (
    <Styled.Wrap>
      {isWidgetTitle && <WidgetTitle title={widgetTitle ?? 'Cryptocurrency converter'} />}

      <Styled.WrapTables>
        <TableCurrencies
          rowsMax={rowsMaxStable || rowsMax}
          dataItems={dataCurrenciesStable}
        >
          <TableCurrenciesParts.TableHead>
            <b>World currencies</b>
            <Input type='string' placeholder='Search currency' />
          </TableCurrenciesParts.TableHead>
        </TableCurrencies>

        <Styled.ButtonChangeTable>
          <IconDoubleArrows fill='#d1d6dd' />
        </Styled.ButtonChangeTable>

        <TableCurrencies
          dataItems={dataCurrenciesCrypto}
          rowsMax={rowsMaxCrypto || rowsMax}
          multiSelect
          hideInput
        >
          <TableCurrenciesParts.TableHead>
            <b>Cryptocurrencies</b>
            <Input type='string' placeholder='Search cryptocurrency' />
          </TableCurrenciesParts.TableHead>
        </TableCurrencies>
      </Styled.WrapTables>

      {isVisibleStatisticCharts && (
        <StatisticCharts
          title='Growth charts'
          dataDescription={dataDescription}
        />
      )}
    </Styled.Wrap>
  )
}

export default CurrenciesCrypto