'use client'

import { useCallback, useEffect, useState } from 'react'

import { useData } from '@/hooks/useData'
import { getUnique } from '@/utils/getUnique'
import { getCurrentMetrics } from '@/utils/getCurrentMetrics'
import Card from '@/components/Card'
import InclusionScoreTimeline from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreTimeline'
import InclusionScoreGeneral from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreGeneral'
import Skeleton from '@/app/dashboard/_components/Skeleton'
import type { metrics } from '@/utils/types'

const InclusionScore = () => {
  const { data: initial, error, isLoading } = useData('inclusionscore')
  const [currentTeam, setCurrentTeam] = useState<string | null>(null)
  const [categories, setCategories] = useState<string[] | null>(null)
  const [currentMetrics, setCurrentMetrics] = useState<metrics | null>(null)
  const [currentData, setCurrentData] = useState<any[] | null>(null)

  const update = useCallback(
    (team?: string) => {
      if (isLoading || error || !initial) return

      const data = initial?.inclusion_metrics
      const teams = getUnique(data, 'team').filter(
        (team) => team !== 'company_average',
      )
      const currentTeams = ['company_average', team || teams[0]]
      const currentData = data.filter((data: any) => {
        return currentTeams.some((team) => data.team === team)
      })

      setCurrentData(currentData)
      setCurrentTeam(currentTeams[1])
      setCategories(teams)
      setCurrentMetrics(getCurrentMetrics(currentData, 'team'))
    },
    [initial, error, isLoading],
  )

  useEffect(() => {
    update()
  }, [initial, isLoading, error, update])

  return (
    <Card classname='col-span-full xl:col-span-4 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20'>
      {isLoading && (
        <div className='flex w-full grow flex-col gap-6 lg:flex-row'>
          <Skeleton className='h-56 w-full lg:w-2/5 xl:h-72' />
          <Skeleton className='h-56 w-full lg:w-3/5 xl:h-72' />
        </div>
      )}
      {currentData && <InclusionScoreGeneral currentData={currentData} />}
      {currentTeam && categories && currentMetrics && currentData && (
        <div className='w-full flex-1 overflow-hidden'>
          <InclusionScoreTimeline
            currentTeam={currentTeam}
            categories={categories}
            currentMetrics={currentMetrics}
            currentData={currentData}
            update={update}
          />
        </div>
      )}
    </Card>
  )
}

export default InclusionScore
