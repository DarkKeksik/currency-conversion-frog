import React, { FC } from 'react'

import { Pagination } from '../../../'
import * as Styled from './TablePanel.styled'

type TTablePanel = {
  pages: number
  paginationPageCurrent: number
  onPagination: () => void
  paginationTotal?: number
}

const TablePanel: FC<TTablePanel> = ({
  pages,
  paginationPageCurrent,
  onPagination,
  paginationTotal
}) => (
  <Styled.TablePanel>
    <Pagination
      totalPages={pages}
      pageActive={paginationPageCurrent}
      onPagination={onPagination}
      paginationTotal={paginationTotal}
    />
  </Styled.TablePanel>
)

export default TablePanel