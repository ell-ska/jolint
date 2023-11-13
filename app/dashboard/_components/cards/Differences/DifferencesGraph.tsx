import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useMediaQuery } from 'usehooks-ts'

import { formatChartData } from '@/utils/formatChartData'
import { getColors } from '@/utils/getColors'

type DifferencesGraphProps = { currentData: any[] }

const DifferencesGraph = ({ currentData }: DifferencesGraphProps) => {
  const md = useMediaQuery('(min-width: 768px)')

  const { data, metrics } = formatChartData({
    data: currentData,
    xAxis: 'metric',
    category: 'demographic_value',
    value: 'variation',
  })

  const colors = getColors(metrics)

  return (
    <ResponsiveContainer width='100%' height={md ? 288 : 176}>
      <BarChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey='metric' className='text-xs' height={32} />
        <YAxis
          domain={[0, 100]}
          tickLine={false}
          width={32}
          className='text-xs'
        />
        <Tooltip />
        {metrics.map((metric, index) => (
          <Bar key={metric} dataKey={metric} fill={colors[index].color} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DifferencesGraph
