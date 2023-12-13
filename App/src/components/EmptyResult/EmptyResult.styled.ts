import styled from 'styled-components'

import { colors } from '@styles'

export const EmptyResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.3em;
  color: ${ colors.white["20"]};
`