import React, {FC, useState} from 'react'
import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts'

import { dataMock } from './dataMock'

type TChartPie = {
  data: Array<any>
  width: string | number
}

const ChartPie: FC<TChartPie> = ({ data, width = '50%' }) => {
  const [ dataChart, setDataChart ] = useState(data || dataMock)
  const COLORS = ['#8884d8', '#00C49F']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <ResponsiveContainer width={width} height="100%">
      <PieChart
        margin={{ bottom: 30 }}
      >
        <Pie
          data={dataChart}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {dataChart.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default ChartPie