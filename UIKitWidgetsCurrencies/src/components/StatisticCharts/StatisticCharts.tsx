import React, { FC } from 'react'

import { InfoBlock, Charts } from '../'
import * as Styled from './StatisticCharts.styled'

type TChartGrowth = {
  descriptionBlockData: Array<any>
}

const ChartGrowth: FC<TChartGrowth> = ({descriptionBlockData}) => {
  return (
    <Styled.StatisticCharts>
      <InfoBlock { ...descriptionBlockData } />
      <Charts.ChartGrowth />
    </Styled.StatisticCharts>
  )
}

export default ChartGrowth