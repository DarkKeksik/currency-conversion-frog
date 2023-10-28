import React, { FC } from 'react'

import { TableHead, TableBody } from './components'
import * as Styled from './Table.styled'

const Table: FC<any> = ({ bodyData = [] }) => {
  return (
    <Styled.Table>
      <TableHead title='From' />
      <TableBody dataItems={bodyData} />
    </Styled.Table>
  )
}

export default Table