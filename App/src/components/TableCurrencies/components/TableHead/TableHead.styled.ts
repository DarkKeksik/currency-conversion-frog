import styled from 'styled-components'

import { colors } from '@styles'

export const Head = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  font-size: 18px;
  letter-spacing: 1px;
  color: ${ colors.white["5"] };
  background: ${ colors.blue["25"] };
`

export const Title = styled.p`
  font-weight: 700;
`