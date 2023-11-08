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
// import { colors } from '@/tailwind.config'

type InclusionOfNewHiresChartProps = {
  currentData: any[]
}

const InclusionOfNewHiresChart = ({
  currentData,
}: InclusionOfNewHiresChartProps) => {
  const data = formatChartData({
    data: currentData,
    xAxis: 'time',
    metric: 'demographic_value',
    value: 'inclusion_value',
  })

  console.log(data)
  return null

  // return (
  //   <ResponsiveContainer height={144} width={'100%'}>
  //     <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
  //       <defs>
  //         <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
  //           <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
  //           <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
  //         </linearGradient>
  //         <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
  //           <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
  //           <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
  //         </linearGradient>
  //       </defs>
  //       <XAxis dataKey='time' axisLine={false} tickLine={false} />
  //       <YAxis domain={[0, 100]} width={32} axisLine={false} tickLine={false} />
  //       <Tooltip />
  //       <Area
  //         type='monotone'
  //         dataKey='male'
  //         stroke='#8884d8'
  //         fillOpacity={1}
  //         fill='url(#colorUv)'
  //       />
  //       <Area
  //         type='monotone'
  //         dataKey='female'
  //         stroke='#82ca9d'
  //         fillOpacity={1}
  //         fill='url(#colorPv)'
  //       />
  //     </AreaChart>
  //   </ResponsiveContainer>
  // )
}

export default InclusionOfNewHiresChart
