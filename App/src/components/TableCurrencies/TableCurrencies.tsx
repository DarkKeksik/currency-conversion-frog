import React, {FC, PropsWithChildren, useState} from 'react'

import { hooksCommon } from '@hooks'
import { EmptyResult, Preloader } from '@Components'

import { TableHead, TableBody, TablePanel } from './components'
import * as Styled from './TableCurrencies.styled'

type TypeTableCurrencies = PropsWithChildren & {
  dataItems: any
  title?: string
  rowsMax?: number
  multiSelect?: boolean
  hideInput?: boolean
  isSelectedDefault?: boolean
  handlerItem?: (data) => void
  callbackPagination?: () => void
}

const TableCurrencies: FC<TypeTableCurrencies> = ({
  children,
  dataItems,
  title,
  rowsMax = 5,
  multiSelect = false,
  hideInput,
  isSelectedDefault,
  handlerItem,
  callbackPagination
}) => {
  if(!dataItems) {
    return <Preloader />
  }

  const [pageCurrent, setPageCurrent] = useState(1)
  const [data, totalPages] = hooksCommon.usePaginationData(dataItems, pageCurrent, rowsMax)

  return (
    <Styled.TableCurrencies>
      {children ?? <TableHead title={title} />}
      {dataItems.length ? (
        <>
          <TableBody
            multiSelect={multiSelect}
            dataItems={data}
            rowsMax={rowsMax}
            hideInput={hideInput}
            isSelectedDefault={isSelectedDefault}
            handler={handlerItem}
          />
          <TablePanel
            pages={totalPages}
            paginationPageCurrent={pageCurrent}
            onPagination={setPageCurrent}
            paginationTotal={3}
          />
        </>
      ): (
        <EmptyResult>
          <p>We couldn't find anything for you</p>
          <p>Please, try other currencies</p>
        </EmptyResult>
      )}
    </Styled.TableCurrencies>
  )
}

export default TableCurrencies