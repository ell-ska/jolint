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
import { getColors } from '@/utils/getColors'

type InclusionOfNewHiresChartProps = {
  currentData: any[]
}

const InclusionOfNewHiresChart = ({
  currentData,
}: InclusionOfNewHiresChartProps) => {
  const { data, metrics } = formatChartData({
    data: currentData,
    xAxis: 'time',
    category: 'demographic_value',
    value: 'inclusion_value',
  })

  const gradients = getColors(metrics)

  return (
    <ResponsiveContainer height={144} width={'100%'}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
          interval={'preserveStartEnd'}
          dataKey='time'
          axisLine={false}
          tickLine={false}
          height={32}
        />
        <YAxis domain={[0, 100]} axisLine={false} tickLine={false} width={32} />
        <Tooltip />
        {metrics.map((metric, index) => (
          <Area
            key={metric}
            type='monotone'
            dataKey={metric}
            stroke={gradients[index].color}
            fillOpacity={1}
            fill={`url(#${gradients[index].id})`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default InclusionOfNewHiresChart
