import React, { FC } from 'react'

import { InfoBlock, Charts } from '../'
import * as Styled from './StatisticCharts.styled'

type TChartGrowth = {
  dataDescription: Array<any>
  title: string
}

const ChartGrowth: FC<TChartGrowth> = ({dataDescription, title}) => {
  return (
    <Styled.StatisticCharts>
      <InfoBlock { ...dataDescription } />

      <Styled.ChartsGrowth>
        {title && <Styled.Title>{ title }</Styled.Title>}

        <Styled.WrapCharts>
          <Charts.ChartLine width="80%" />
          <Charts.ChartPie />
        </Styled.WrapCharts>

      </Styled.ChartsGrowth>
    </Styled.StatisticCharts>
  )
}

export default ChartGrowth