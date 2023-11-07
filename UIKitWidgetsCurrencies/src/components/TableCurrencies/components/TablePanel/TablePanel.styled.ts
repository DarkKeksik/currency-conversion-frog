import styled, { css } from 'styled-components'

export const TablePanel = styled.div`
  display: flex;
  gap: .3rem;
  padding: .4rem;
  background: #1d2634;
  color: white;
`

export const PanelItem = styled.p<{isActive?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 3px;
  font-size: 18rem;
  cursor: pointer;
  transition-duration: .3s;

  &:hover {
    background-color: #2b4a51;
  }
  
  ${({ isActive }) => isActive && css`
    background: #26ad8d;
  `}
`