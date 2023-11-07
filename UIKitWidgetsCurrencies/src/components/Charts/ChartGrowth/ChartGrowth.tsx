import React, {FC} from 'react'

import * as Styled from './ChartGrowth.styled'

const ChartGrowth: FC = () => {
  return (
    <Styled.ChartGrowth>
      <Styled.Description>
        <Styled.DescriptionTitle>
          Changes "BTC/USDT"
          <Styled.DescriptionSubtitle>over 6 months</Styled.DescriptionSubtitle>
        </Styled.DescriptionTitle>
        <Styled.DescriptionItems>
          <Styled.DescriptionCol>
            <Styled.DescriptionItem>25119.40 USD</Styled.DescriptionItem>
            <Styled.DescriptionItem>34974.40 USD</Styled.DescriptionItem>
          </Styled.DescriptionCol>
          <Styled.DescriptionCol>
            <Styled.RateChange isRising>+15.3%</Styled.RateChange>
          </Styled.DescriptionCol>
        </Styled.DescriptionItems>
      </Styled.Description>
      <Styled.WrapCharts />
    </Styled.ChartGrowth>
  )
}

export default ChartGrowth