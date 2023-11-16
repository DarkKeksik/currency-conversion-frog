import React, {FC, PropsWithChildren} from 'react'

import { TableHead, TableBody } from './components'
import * as Styled from './TableCurrencies.styled'

type TypeTableCurrencies = PropsWithChildren & {
  dataItems: any
  title?: string
  rowsMax?: number
  multiSelect?: boolean
  hideInput?: boolean
}

const TableCurrencies: FC<TypeTableCurrencies> = ({
  children,
  dataItems = [],
  title,
  rowsMax = 5,
  multiSelect = false,
  hideInput
}) => {
  return (
    <Styled.TableCurrencies>
      {children ?? <TableHead title={title} />}
      <TableBody
        multiSelect={multiSelect}
        dataItems={dataItems}
        rowsMax={rowsMax}
        hideInput={hideInput}
      />
    </Styled.TableCurrencies>
  )
}

export default TableCurrencies