'use client'

import { useCallback, useEffect, useState } from 'react'

import { useData } from '@/hooks/useData'
import { getUnique } from '@/utils/getUnique'
import { formatWeeklyData } from '@/utils/formatWeeklyData'
import Card from '@/components/Card'
import InclusionScoreTimeline from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreTimeline'
import InclusionScoreGeneral from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreGeneral'

const InclusionScore = () => {
  const { data: initial, error, isLoading } = useData('inclusionscore')
  const [currentWeek, setCurrentWeek] = useState<string | null>(null)
  const [weeks, setWeeks] = useState<string[] | null>(null)
  const [currentData, setCurrentData] = useState<any[] | null>(null)

  const update = useCallback(
    (week?: string) => {
      if (isLoading || error || !initial) return

      const data = initial?.inclusion_metrics

      const currentWeek = week || data.reverse()[0].iso_week
      const currentData = data.filter(
        (data: any) => data.iso_week === currentWeek,
      )

      setCurrentData(
        formatWeeklyData({
          originalData: data,
          currentData,
          categories: [
            'team_inclusion',
            'cross_functional_inclusion',
            'informal_influence',
            'work_habits',
          ],
        }),
      )
      setCurrentWeek(currentWeek)
      setWeeks(getUnique(data, 'iso_week'))
    },
    [initial, error, isLoading],
  )

  useEffect(() => {
    update()
  }, [initial, isLoading, error, update])

  return (
    <Card classname='col-span-full lg:col-span-4 flex flex-col items-center gap-8 xl:flex-row lg:items-start lg:gap-20'>
      {/* <InclusionScoreGeneral />
      <div className='w-full flex-1 overflow-hidden'>
        <InclusionScoreTimeline />
      </div> */}
    </Card>
  )
}

export default InclusionScore
