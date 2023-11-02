'use client'
import React, { useState } from 'react'
import { getDataTeamsAndScores } from '@/utils/getDataTeamsAndScores'
import data from '@/lib/mockData.json'
import InclusionScoreTopBar from './InclusionScoreTopBar'
import InclusionScoreChart from './InclusionScoreChart'
import CardHeader from '../../CardHeader'

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
  // ex på parametrar inclusion_score, work_habits, cross_functional_inclusion, informal_influence
  const result = getDataTeamsAndScores(
    originalData,
    teamsToAggregate,
    'inclusion_score',
  )

  // tar ut namnen från nya arrayen så man bara har teamsen
  const teamkeys = Object.keys(result[0]).filter(
    (key) =>
      key !== 'month' && key !== 'benchmark' && key !== 'company_average',
  )

  console.log(teamkeys)

  const [selectedTeam, setSelectedTeam] = useState(teamkeys[2])
  return (
    <div className='flex flex-col relative'>
      <InclusionScoreTopBar
        title='Timeline'
        companyAverage='Company average'
        team={selectedTeam}
        teams={teamkeys}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
      <CardHeader
        title='Timeline'
        currentMetrics={[{ metric: 'Company Average', circleColor: '#91BBE7' }, { metric: selectedTeam, circleColor: '#0015CE' }]}
        dropdown={{
          onSelect: (value) => setSelectedTeam(value),
          selected: selectedTeam,
          options: teamkeys,
          align: 'start',
          // Add other props as needed
        }}
      />
      <div className='h-full w-full relative'>
        <InclusionScoreChart data={result} selectedTeam={selectedTeam} />
      </div>
    </div>
  )
}

export default InclusionScoreTimeline
