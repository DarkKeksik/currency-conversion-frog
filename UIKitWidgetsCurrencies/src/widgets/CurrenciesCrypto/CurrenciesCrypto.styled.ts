import styled, { css } from 'styled-components'

import { colors } from "../../styles"

type TWrap = {
  size?: string
}

export const Wrap = styled.div<TWrap>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: ${ colors.blue["30"] };
  
  max-width: ${({size}) => {
    switch (size) {
      case 's':
        return '640px'
      case 'm':
        return '1024px'
      case 'l':
        return '1280px'
      default:
        return 'auto'
    }
  }};
  
  ${({size}) => size && css`margin: 0 auto`};
`

export const WrapTables = styled.div`
  display: flex;
  gap: 5px;
`

// @TODO 60px from table header need fix
export const ButtonChangeTable = styled.a`
  display: flex;
  margin-top: 60px;
  align-self: center;
  border: 1px solid #2b3947;
  border-radius: 5px;
  padding: 2px;
  box-shadow: -15px 0 10px inset #2b4a51;
  cursor: pointer;
  transition-duration: .3s;
  
  &:hover {
    box-shadow: 15px 0 10px inset #2b4a51;
  }
`