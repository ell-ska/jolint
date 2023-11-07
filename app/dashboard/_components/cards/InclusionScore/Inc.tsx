// InclusionScoreTimeline.tsx
import React, { useState, useEffect } from 'react'
import { getDataTeamsAndScores } from '@/utils/getDataTeamsAndScores'
import InclusionScoreChart from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreChart'
import CardHeader from '@/app/dashboard/_components/CardHeader'

/* interface ComboDataEntry {
  month: string
  team: string
  inclusion_score: number
  [key: string]: number | string
} */

interface AggregatedDataEntry {
  month: string
  [team: string]: number | string | null
  benchmark: number
}

const InclusionScoreTimeline = () => {
  const [fetchedData, setFetchedData] = useState<AggregatedDataEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedTeam, setSelectedTeam] = useState<string>('')
  const [teamKeys, setTeamKeys] = useState<string[]>([])

  /* const url = `${process.env.NEXT_PUBLIC_URL}${process.env.NEXT_PUBLIC_APIKEY}` */
  const url = `${process.env.NEXT_PUBLIC_URL}`

  const teamsToAggregate = [
    'Finance',
    'Marketing',
    'HR',
    'company_average',
    'Sales',
    'Engineering',
  ] // Updated team names

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Error while fetching data')
        }

        const result = await response.json()

        const data = getDataTeamsAndScores(
          result.inclusion_metrics,
          teamsToAggregate,
          'inclusion_score',
        )
        setFetchedData(data)
        setIsLoading(false)
        setError(null)
      } catch (error: any) {
        setIsLoading(false)
        setError(error.message)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const computeTeamKeys = async () => {
      try {
        //check that fetchedData is not 0
        if (fetchedData.length > 0 && fetchedData[0]) {
          const teamkeys = Object.keys(fetchedData[0]).filter(
            (key) =>
              key !== 'month' &&
              key !== 'benchmark' &&
              key !== 'company_average',
          )
          setSelectedTeam(teamkeys[2])
          console.log(teamkeys)
          setTeamKeys(teamkeys)
        }
      } catch (error) {
        // Handle errors if necessary
        console.error('Error computing team keys:', error)
      }
    }

    computeTeamKeys()
  }, [fetchedData])

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
        <InclusionScoreChart data={fetchedData} selectedTeam={selectedTeam} />
      </div>
    </div>
  )
}

export default InclusionScoreTimeline
