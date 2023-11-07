'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

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

type AggregatedDataEntry = {
  month: string
  [team: string]: number | string | null
  benchmark: number
}

type ChartComponentProps = {
  data: DataItem[] | AggregatedDataEntry[]
  selectedTeam: string
}

const InclusionScoreChart: React.FC<ChartComponentProps> = ({
  data,
  selectedTeam,
}) => {
  return (
    <ResponsiveContainer height={220} width={'100%'}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: -20, left: -25, bottom: -10 }}
        style={{ strokeWidth: 0 }}
      >
        <defs>
          <linearGradient id='colorMA' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor=' #687af6' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#9ba6f8' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorHR' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#bec3ee' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#dee1f7' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray='3' />
        <XAxis dataKey='month' stroke='#0f172a' tick={{ fontSize: 12 }} />
        <YAxis
          dataKey='Score'
          type='number'
          domain={[0, 100]}
          stroke='#0f172a'
          tick={{ fontSize: 12 }}
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
