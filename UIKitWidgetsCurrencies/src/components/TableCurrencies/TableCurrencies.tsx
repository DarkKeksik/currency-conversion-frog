import React, {FC, PropsWithChildren} from 'react'

import { TableHead, TableBody } from './components'
import * as Styled from './TableCurrencies.styled'

type TypeTableCurrencies = PropsWithChildren & {
  dataItems: any
  title?: string
}

const TableCurrencies: FC<TypeTableCurrencies> = ({ children, dataItems = [], title }) => {
  return (
    <Styled.TableCurrencies>
      {children ?? <TableHead title={title} />}
      <TableBody dataItems={dataItems} />
    </Styled.TableCurrencies>
  )
}

export default TableCurrencies