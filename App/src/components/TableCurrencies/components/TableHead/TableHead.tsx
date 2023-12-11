import React, { FC, PropsWithChildren } from 'react'
import * as Styled from './TableHead.styled'

type TypeTableHead = PropsWithChildren & {
  title?: string
}

const TableHead: FC<TypeTableHead> = ({ children, title }) => {
  return (
    <Styled.Head>
      {children ?? <Styled.Title>{ title }</Styled.Title>}
    </Styled.Head>
  )
}

export default TableHead