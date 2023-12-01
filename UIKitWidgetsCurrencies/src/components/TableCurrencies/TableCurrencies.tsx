import React, { FC, PropsWithChildren, useMemo, useState } from 'react'

import { TableHead, TableBody, TablePanel } from './components'
import { usePaginationData } from '../../hooks/commons'
import { getAssetsWithName } from '../../helpers'
import { cryptoDataFront } from '../../data'

import * as Styled from './TableCurrencies.styled'

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
  const [pageCurrent, setPageCurrent] = useState(1)
  const [data, totalPages] = usePaginationData(dataItems, pageCurrent, rowsMax)
  const assetsWithName = useMemo(() => (
    getAssetsWithName(data, cryptoDataFront)
  ), [data])

  return (
    <Styled.TableCurrencies>
      {children ?? <TableHead title={title} />}
      <TableBody
        multiSelect={multiSelect}
        dataItems={assetsWithName}
        rowsMax={rowsMax}
        hideInput={hideInput}
        isSelectedDefault={isSelectedDefault}
        callback={callbackItem}
      />
      {dataItems.length > rowsMax && (
        <TablePanel
          pages={totalPages}
          paginationPageCurrent={pageCurrent}
          onPagination={setPageCurrent}
          paginationTotal={3}
          itemsLength={dataItems.length}
        />
      )}
    </Styled.TableCurrencies>
  )
}

export default TableCurrencies