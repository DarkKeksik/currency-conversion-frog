import styled from 'styled-components'

import { colors } from '../../styles'

export const ChartsGrowth = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;
  padding: 1.5rem 1rem;
`

export const Title = styled.p`
  font-size: 1.6rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  text-align: right;
  padding: 0 2rem;
`

export const WrapCharts = styled.div`
  display: flex;
  gap: 5px;
  height: 200px;
  padding: 10px;
`

export const StatisticCharts = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 0.5fr) 1fr;
  background: ${ colors.blue["10"] };
  color: ${ colors.white["5"] };
  box-shadow: 0 -5px 8px -6px ${ colors.blue["25"] };
  border-radius: 6px;
  overflow: hidden;
`