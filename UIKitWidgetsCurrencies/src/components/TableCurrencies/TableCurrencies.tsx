import React, {FC, PropsWithChildren} from 'react'

import { TableHead, TableBody } from './components'
import * as Styled from './TableCurrencies.styled'

type TypeTableCurrencies = PropsWithChildren & {
  dataItems: any
  title?: string
  rowsMax?: number
}

const TableCurrencies: FC<TypeTableCurrencies> = ({
    children,
    dataItems = [],
    title,
    rowsMax = 5
}) => {
  return (
    <Styled.TableCurrencies>
      {children ?? <TableHead title={title} />}
      <TableBody dataItems={dataItems} rowsMax={rowsMax} />
    </Styled.TableCurrencies>
  )
}

export default TableCurrencies