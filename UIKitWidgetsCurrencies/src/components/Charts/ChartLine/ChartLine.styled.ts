import styled from 'styled-components'
import { colors } from '../../../styles'

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  background: ${colors.blue["10"]};
`

export const DescriptionTitle = styled.p`
  text-align: center;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 18px;
`

export const DescriptionSubtitle = styled.p`
  font-size: 12px;
  font-weight: normal;
`

export const DescriptionItems = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: 1px;
`

export const DescriptionCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: .1rem;
`

export const DescriptionItem = styled.p`
  font-size: .875rem;
`

export const RateChange = styled.p<{isRising: boolean}>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({isRising}) => isRising ? colors.green["10"] : colors.red["5"]};
  
  // @TODO Can't compile, guess problem with swc, probable need make config for styled files
  // &:before {
  //   content: ${({isRising}) => isRising ? '+' : '-'};
  // }
`

export const TitleCharts = styled.p``