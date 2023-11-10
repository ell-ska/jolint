'use client'

import { useState, useEffect } from 'react'

import { useData } from '@/hooks/useData'
import { getDataTeamsAndScores } from '@/utils/getDataTeamsAndScores'
import InclusionScoreChart from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreChart'
import CardHeader from '@/app/dashboard/_components/CardHeader'
import type { AggregatedDataEntry } from '@/utils/types'

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
    const data = getDataTeamsAndScores(result, teamsToAggregate, 'inclusion_score')
    setChartData(data)
  }, [isLoading, error, originalData])

  useEffect(() => {
    const computeTeamKeys = async () => {
      try {
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
    <div className='flex w-full flex-col gap-8'>
      <CardHeader
        title='Timeline'
        currentMetrics={[
          { metric: 'Company Average', circleColor: 'bg-blue-light' },
          { metric: selectedTeam, circleColor: 'bg-blue-bright' },
        ]}
        dropdown={{
          onSelect: (value) => setSelectedTeam(value),
          selected: selectedTeam,
          options: teamKeys,
          align: 'start',
        }}
      />
      <InclusionScoreChart data={chartData} selectedTeam={selectedTeam} />
    </div>
  )
}

export default InclusionScoreTimeline
