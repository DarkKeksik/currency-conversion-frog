import React, { FC, useState } from 'react'
import {
  LineChart, Line, XAxis,
  YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer
} from 'recharts'

import { dataMock } from './dataMock'

type TChartLine = {
  width: number | string
}

const ChartLine: FC<TChartLine> = ({ width = '50%' }) => {
  const [ dataChart, setDataChart ] = useState(dataMock)

  return (
    <ResponsiveContainer width={width}>
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
  )
}

export default ChartLine