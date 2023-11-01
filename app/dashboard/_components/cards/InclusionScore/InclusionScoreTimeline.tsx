'use client'
import React, { useState } from 'react'
import { getDataTeamsAndScores } from '@/utils/getDataTeamsAndScores'
import data from '@/lib/mockData.json'
import InclusionScoreTopBar from './InclusionScoreTopBar'
import InclusionScoreChart from './InclusionScoreChart'

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
  const keys = Object.keys(result[0]).filter(
    (key) =>
      key !== 'month' && key !== 'benchmark' && key !== 'company_average',
  )

  console.log(keys)

  const [selectedTeam, setSelectedTeam] = useState(keys[2])
  return (
    <div className='flex flex-col relative'>
      <InclusionScoreTopBar
        title='Timeline'
        companyAverage='Company average'
        team={selectedTeam}
        teams={keys}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
      <div className='h-full w-full relative'>
        <InclusionScoreChart data={result} selectedTeam={selectedTeam} />
      </div>
    </div>
  )
}

export default InclusionScoreTimeline
