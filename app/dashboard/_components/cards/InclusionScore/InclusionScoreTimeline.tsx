'use client'
import React, { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { getDataTeamsAndScores } from '@/utils/getDataTeamsAndScores'
import data from '@/lib/mockData.json'
import InclusionScoreTopBar from './InclusionScoreTopBar'

interface DataItem {
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

interface AggregatedDataEntry {
  month: string
  [team: string]: number | string | null
  benchmark: number
}

interface ChartComponentProps {
  data: DataItem[] | AggregatedDataEntry[]
  selectedTeam: string
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  selectedTeam,
}) => {
  console.log('data from chart', data)
  return (
    <ResponsiveContainer width={600} height={300} className='pt-16'>
      <AreaChart
        data={data}
        margin={{ top: 0, right: 10, left: -25, bottom: -7 }}
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

const InclusionScoreTimeline = () => {
  const originalData: DataItem[] = data

  const HR = 'HR'
  const CA = 'company_average'
  const Marketing = 'Marketing'
  const Sales = 'Sales'
  const Finance = 'Finance'
  // gör en array av teamsen man vill ha en score från
  const teamsToAggregate = [Finance, Marketing, HR, CA, Sales]

  // kallar på functionen som tar teams och vilken score man vill åt
  // och sedan får ut en ny array med innehållet
  const result = getDataTeamsAndScores(
    originalData,
    teamsToAggregate,
    'inclusion_score',
  )

  const keys = Object.keys(result[0]).filter(
    (key) =>
      key !== 'month' && key !== 'benchmark' && key !== 'company_average',
  )

  console.log(keys)

  const [selectedTeam, setSelectedTeam] = useState(keys[2])
  return (
    <section className='max-w-96 max-h-96'>
      <InclusionScoreTopBar
        title='Timeline'
        companyAverage='Company average'
        team={selectedTeam}
        teams={keys}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
      <ChartComponent data={result} selectedTeam={selectedTeam} />
    </section>
  )
}

export default InclusionScoreTimeline
