import React, { FC } from 'react'

import { TableCurrencies, TableCurrenciesParts, WidgetTitle } from '../../components'
import * as Styled from './CurrenciesCrypto.styled'

type TCurrenciesCrypto = {
  widgetTitle: string,
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
    rowsMax = 5,
    rowsMaxStable,
    rowsMaxCrypto
}) => {
  return (
    <Styled.Wrap>
      <WidgetTitle title={widgetTitle ?? 'Cryptocurrency converter'} />
      <Styled.WrapTables>
        <TableCurrencies rowsMax={rowsMaxStable || rowsMax} dataItems={dataCurrenciesStable}>
          <TableCurrenciesParts.TableHead>From</TableCurrenciesParts.TableHead>
        </TableCurrencies>

        <TableCurrencies rowsMax={rowsMaxCrypto || rowsMax} dataItems={dataCurrenciesCrypto}>
          <TableCurrenciesParts.TableHead>To</TableCurrenciesParts.TableHead>
        </TableCurrencies>
      </Styled.WrapTables>
    </Styled.Wrap>
  )
}

export default CurrenciesCrypto