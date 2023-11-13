'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useMediaQuery } from 'usehooks-ts'

import { formatChartData } from '@/utils/formatChartData'
import { getColors } from '@/utils/getColors'
import { colors } from '@/tailwind.config'

type InclusionScoreChartProps = {
  currentData: any[]
}

const InclusionScoreChart = ({ currentData }: InclusionScoreChartProps) => {
  const md = useMediaQuery('(min-width: 768px)')

  const { data, metrics } = formatChartData({
    data: currentData,
    xAxis: 'month',
    category: 'team',
    value: 'inclusion_score',
    benchmark: 50,
  })

  const gradients = getColors(metrics)

  return (
    <ResponsiveContainer height={md ? 224 : 140}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: -20, left: -30, bottom: -10 }}
      >
        <defs>
          {gradients.map((gradient) => (
            <linearGradient
              key={gradient.id}
              id={gradient.id}
              x1='0'
              y1='0'
              x2='0'
              y2='1'
            >
              <stop offset='5%' stopColor={gradient.color} stopOpacity={0.8} />
              <stop offset='95%' stopColor={gradient.color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <XAxis
          dataKey='month'
          className='text-xs'
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          className='text-xs'
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        {metrics.map((metric, index) => (
          <Area
            key={metric}
            type='monotone'
            dataKey={metric}
            stroke={gradients[index].color}
            fill={`url(#${gradients[index].id})`}
            strokeWidth={2}
          />
        ))}
        <Area
          key='benchmark'
          type='monotone'
          dataKey='benchmark'
          stroke={colors.red}
          fill='transparent'
          strokeWidth={2}
          strokeDasharray='6'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default InclusionScoreChart
