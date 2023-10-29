import React, { FC } from 'react'

import { TableCurrencies, TableCurrenciesParts } from '../../components'
import * as Styled from './CurrenciesCrypto.styled'

const CurrenciesCrypto: FC<any> = ({ dataCurrenciesCrypto, dataCurrenciesStable }) => {
  return (
    <Styled.Wrap>
      <TableCurrencies dataItems={dataCurrenciesCrypto}>
        <TableCurrenciesParts.TableHead>
          From
        </TableCurrenciesParts.TableHead>
      </TableCurrencies>
      <TableCurrencies title='To' dataItems={dataCurrenciesStable} />
    </Styled.Wrap>
  )
}

export default CurrenciesCrypto