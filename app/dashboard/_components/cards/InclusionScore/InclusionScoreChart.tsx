'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import type { AggregatedDataEntry } from '@/utils/types'

type DataItem = {
  month: string
  first_day_of_week: number
  iso_week: string
  team: string
  inclusion_score: number
  work_habits: number
  cross_functional_inclusion: number
  informal_influence: number
  benchmark: number
  [key: string]: number | string
}

type ChartComponentProps = {
  data: DataItem[] | AggregatedDataEntry[]
  selectedTeam: string
}

const InclusionScoreChart = ({ data, selectedTeam }: ChartComponentProps) => {
  return (
    <ResponsiveContainer height={220}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: -20, left: -30, bottom: -10 }}
      >
        <defs>
          <linearGradient id='colorMA' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#91BBE7' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#2C3386' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorHR' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#CBD5E1' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#E2E8F0' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='month'
          className='text-xs'
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey='Score'
          type='number'
          domain={[0, 100]}
          className='text-xs'
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type='monotone'
          dataKey={selectedTeam}
          stroke='#0015CE'
          fill='url(#colorMA)'
          strokeWidth={2}
        />
        <Area
          type='monotone'
          dataKey='company_average'
          stroke='#91BBE7'
          fill='url(#colorHR)'
          strokeWidth={2}
        />
        <Area
          type='monotone'
          dataKey='benchmark'
          stroke='#D3383B'
          fill='transparent'
          strokeWidth={2}
          strokeDasharray='6'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default InclusionScoreChart