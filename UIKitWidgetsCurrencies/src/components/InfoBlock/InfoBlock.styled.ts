import styled from 'styled-components'

import { colors } from '../../styles'

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  background: ${ colors.blue["25"] };
`

export const Title = styled.p`
  text-align: center;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 18px;
`

export const Subtitle = styled.p`
  font-size: 12px;
  font-weight: normal;
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: 1px;
`

export const Item = styled.div`
  font-size: .875rem;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: .1rem;
`

export const RateChange = styled.p<{isRising: boolean}>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({isRising}) => isRising ? colors.green["15"] : colors.red["5"]};

  &:before {
      content: '${({isRising}) => isRising ? '+' : '-'}';
  }
`