import React, {FC, PropsWithChildren} from 'react'

import { TableHead, TableBody } from './components'
import * as Styled from './TableCurrencies.styled'
import TablePanel from "./components/TablePanel/TablePanel";

type TypeTableCurrencies = PropsWithChildren & {
  dataItems: any
  title?: string
  rowsMax?: number
  multiSelect?: boolean
  hideInput?: boolean
  isSelectedDefault?: boolean
  callbackItem?: () => void
  callbackPagination?: () => void
}

const TableCurrencies: FC<TypeTableCurrencies> = ({
  children,
  dataItems = [],
  title,
  rowsMax = 5,
  multiSelect = false,
  hideInput,
  isSelectedDefault,
  callbackItem,
  callbackPagination
}) => {
  return (
    <Styled.TableCurrencies>
      {children ?? <TableHead title={title} />}
      <TableBody
        multiSelect={multiSelect}
        dataItems={dataItems}
        rowsMax={rowsMax}
        hideInput={hideInput}
        isSelectedDefault={isSelectedDefault}
        callback={callbackItem}
      />
      {dataItems.length > rowsMax && (
        <TablePanel
          quantity={34}
          paginationCurrent={1}
          itemsLength={dataItems.length}
          paginationMax={23}
        />
      )}
    </Styled.TableCurrencies>
  )
}

export default TableCurrencies