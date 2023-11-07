'use client'
import React, { useState, useEffect } from 'react'
import { getDataTeamsAndScores } from '@/utils/getDataTeamsAndScores'
import InclusionScoreChart from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreChart'
import CardHeader from '@/app/dashboard/_components/CardHeader'
import { useData } from '@/hooks/useData'

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

/* const GetData = () => {
  const data = useData('inclusionscore')
  return data
} */

const InclusionScoreTimeline = () => {
  const [chartData, setChartData] = useState<AggregatedDataEntry[]>([])
  const [selectedTeam, setSelectedTeam] = useState<string>('')
  const [teamKeys, setTeamKeys] = useState<string[]>([])
  const data = useData('inclusionscore')

 

  console.log(data?.data.inslusion_metrics)

  const teamsToAggregate = [
    'Finance',
    'Marketing',
    'HR',
    'company_average',
    'Sales',
    'Engineering',
  ]

/*   if (data !== null && data !== undefined) {
    setChartData(data?.data.inclusion_metrics)
    const result = getDataTeamsAndScores(
      data?.data.inclusion_metrics,
      teamsToAggregate,
      'inclusion_score',
    )
  
  
    const teamkeys = Object.keys(result[0]).filter(
      (key) =>
        key !== 'month' &&
        key !== 'benchmark' &&
        key !== 'company_average',
    )
    setSelectedTeam(teamkeys[2])
    console.log(teamkeys)
    setTeamKeys(teamkeys)
  } */


  // tar ut namnen från nya arrayen så man bara har teamsen
  /*   const teamkeys = Object.keys(result[0]).filter(
    (key) =>
      key !== 'month' && key !== 'benchmark' && key !== 'company_average',
  )

  console.log(teamkeys) */
  /* 
  const [selectedTeam, setSelectedTeam] = useState(teamkeys[2]) */
  /*   const [selectedTeam, setSelectedTeam] = useState('HR')
  const teamkeys = ['1', '2', '3'] */
  return (
    <div className='relative flex h-full w-full flex-col lg:pl-20'>
      <CardHeader
        title='Timeline'
        currentMetrics={[
          { metric: 'Company Average', circleColor: 'bg-[#91BBE7]' },
          { metric: selectedTeam, circleColor: 'bg-[#0015CE]' },
        ]}
        dropdown={{
          onSelect: (value) => setSelectedTeam(value),
          selected: selectedTeam,
          options: teamKeys,
          align: 'start',
        }}
      />
      <div className='relative min-w-[386] pt-16'>
        <InclusionScoreChart data={chartData} selectedTeam={selectedTeam} />
      </div>
    </div>
  )
}

export default InclusionScoreTimeline
