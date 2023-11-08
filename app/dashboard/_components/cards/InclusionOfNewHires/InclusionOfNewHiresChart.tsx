'use client'

import {
  ResponsiveContainer,
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { formatChartData } from '@/utils/formatChartData'

type InclusionOfNewHiresChartProps = {
  currentData: any[]
  categories: string[]
}

const InclusionOfNewHiresChart = ({
  currentData,
  categories,
}: InclusionOfNewHiresChartProps) => {
  const { data, metrics } = formatChartData({
    data: currentData,
    xAxis: 'time',
    category: 'demographic_value',
    value: 'inclusion_value',
  })

  return (
    <>
      <ResponsiveContainer height={144} width={'100%'}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='test' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='time' axisLine={false} tickLine={false} />
          <YAxis
            domain={[0, 100]}
            width={32}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          {metrics.map((metric) => (
            <Area
              key={metric}
              type='monotone'
              dataKey={metric}
              stroke='#8884d8'
              fillOpacity={1}
              fill={`url(#test)`}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default InclusionOfNewHiresChart
