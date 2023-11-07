import styled from 'styled-components'

export const ChartGrowth = styled.div`
  display: grid;
  grid-template-columns: .5fr 1fr;
  border-radius: 6px;
  height: 250px;
  overflow: hidden;
  box-shadow: 0 -5px 8px -6px #0000009e;
  color: #d1d6dd;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  background: #1d2634;
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
  color: ${({isRising}) => isRising ? '#26ad8d' : '#fe7079'};
  
  // @TODO Can't compile, guess problem with swc, probable need make config for styled files
  // &:before {
  //   content: ${({isRising}) => isRising ? '+' : '-'};
  // }
`

export const WrapCharts = styled.div`
  background: #2b3947;
`