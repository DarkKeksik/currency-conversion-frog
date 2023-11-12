import React, { FC, useState } from 'react'
import {
  LineChart, PieChart, Line, XAxis,
  YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Pie
} from 'recharts'

import { dataMock } from './dataMock'
import * as Styled from './ChartGrowth.styled'

const ChartGrowth: FC = () => {
  const [ dataChart, setDataChart ] = useState(dataMock)

  return (
    <Styled.WrapCharts>
      <ResponsiveContainer height={200} width={350}>
        <LineChart data={dataChart}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Bitcoin" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Ethereum" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <PieChart width={200} height={250}>
        <Pie data={dataChart} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      </PieChart>
    </Styled.WrapCharts>
  )
}

export default ChartGrowth