import styled, { css } from 'styled-components'

import { colors } from '@styles'

export const TablePanel = styled.div`
  display: flex;
  align-items: end;
  gap: .8rem;
  padding: .2rem;
  color: white;
  background: ${colors.blue["20"]};
`

export const TableBody = styled.div`
  display: flex;
  gap: .3rem;
`

export const Delimiter = styled.p`

`

export const PanelItem = styled.p<{isActive?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 3px;
  font-size: 12px;
  transition-duration: .3s;
  
  ${({ isActive }) => isActive ?
    css`
      background: ${colors.green["10"]};
    ` :
    css`
      &:hover {
        background-color: ${colors.green["5"]};
        cursor: pointer;
      }`
    }
`