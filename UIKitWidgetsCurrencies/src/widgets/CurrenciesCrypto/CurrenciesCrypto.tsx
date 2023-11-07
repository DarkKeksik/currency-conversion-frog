import React, { FC } from 'react'

import { TableCurrencies, TableCurrenciesParts, WidgetTitle, Charts } from '../../components'
import * as Styled from './CurrenciesCrypto.styled'

type TCurrenciesCrypto = {
  widgetTitle: string,
  isWidgetTitle?: boolean,
  dataCurrenciesCrypto: any,
  dataCurrenciesStable: any,
  rowsMax?: number,
  rowsMaxStable?: number,
  rowsMaxCrypto?: number
}

const CurrenciesCrypto: FC<TCurrenciesCrypto> = ({
    dataCurrenciesCrypto,
    dataCurrenciesStable,
    widgetTitle,
    isWidgetTitle = true,
    rowsMax = 5,
    rowsMaxStable,
    rowsMaxCrypto
}) => {
  return (
    <Styled.Wrap>
      {isWidgetTitle && <WidgetTitle title={widgetTitle ?? 'Cryptocurrency converter'} />}

      <Styled.WrapTables>
        <TableCurrencies rowsMax={rowsMaxStable || rowsMax} dataItems={dataCurrenciesStable}>
          <TableCurrenciesParts.TableHead>World currencies</TableCurrenciesParts.TableHead>
        </TableCurrencies>

        <TableCurrencies rowsMax={rowsMaxCrypto || rowsMax} dataItems={dataCurrenciesCrypto}>
          <TableCurrenciesParts.TableHead>Cryptocurrencies</TableCurrenciesParts.TableHead>
        </TableCurrencies>
      </Styled.WrapTables>
      <Charts.ChartGrowth />
    </Styled.Wrap>
  )
}

export default CurrenciesCrypto