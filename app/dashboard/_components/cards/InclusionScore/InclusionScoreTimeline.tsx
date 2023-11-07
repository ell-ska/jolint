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

const InclusionScoreTimeline = () => {
  const [chartData, setChartData] = useState<AggregatedDataEntry[]>([])
  const [selectedTeam, setSelectedTeam] = useState<string>('')
  const [teamKeys, setTeamKeys] = useState<string[]>([])
  const { data: originalData, isLoading, error } = useData('inclusionscore')

  useEffect(() => {
    if (isLoading || error || !originalData) return

    const teamsToAggregate = [
      'Finance',
      'Marketing',
      'HR',
      'company_average',
      'Sales',
      'Engineering',
    ]

    const result = originalData?.inclusion_metrics
    const d = getDataTeamsAndScores(result, teamsToAggregate, 'inclusion_score')
    setChartData(d)
  }, [isLoading, error, originalData])

  useEffect(() => {
    const computeTeamKeys = async () => {
      try {
        //check that fetchedData is not 0
        if (chartData.length > 0 && chartData[0]) {
          const teamkeys = Object.keys(chartData[0]).filter(
            (key) =>
              key !== 'month' &&
              key !== 'benchmark' &&
              key !== 'company_average',
          )
          setSelectedTeam(teamkeys[2])
          setTeamKeys(teamkeys)
        }
      } catch (error) {
        console.error('Error computing team keys:', error)
      }
    }
    computeTeamKeys()
  }, [chartData])

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
