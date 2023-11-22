import React, { FC } from 'react'

import * as Styled from './TablePanel.styled'

type TTablePanel = {
  quantity: number
  itemsLength: number
  paginationCurrent: number
  paginationMax?: number,
}

const TablePanel: FC<TTablePanel> = ({
  quantity,
  paginationCurrent,
  paginationMax = 3,
  itemsLength
}) => {
  return (
    <Styled.TablePanel>
      <Styled.PanelItem>1</Styled.PanelItem>

      <Styled.TableBody>
        <Styled.PanelItem>2</Styled.PanelItem>
        <Styled.PanelItem isActive>3</Styled.PanelItem>
        <Styled.PanelItem>4</Styled.PanelItem>
      </Styled.TableBody>

      <Styled.PanelItem>{ quantity }</Styled.PanelItem>
    </Styled.TablePanel>
  )
}

export default TablePanel