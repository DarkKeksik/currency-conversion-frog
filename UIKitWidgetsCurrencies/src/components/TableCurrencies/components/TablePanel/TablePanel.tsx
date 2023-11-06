import React, { FC } from 'react'
import * as Styled from './TablePanel.styled'

const TablePanel: FC = () => {
  return (
    <Styled.TablePanel>
      <Styled.PanelItem>1</Styled.PanelItem>
      <Styled.PanelItem isActive={true}>2</Styled.PanelItem>
      <Styled.PanelItem>3</Styled.PanelItem>
    </Styled.TablePanel>
  )
}

export default TablePanel