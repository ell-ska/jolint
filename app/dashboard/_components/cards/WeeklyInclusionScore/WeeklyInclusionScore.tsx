'use client'

import { useCallback, useEffect, useState } from 'react'

import { useData } from '@/hooks/useData'
import { formatWeeklyData } from '@/utils/formatWeeklyData'
import { formatWeek } from '@/utils/formatWeek'
import { getUnique } from '@/utils/getUnique'
import { descriptions } from '@/lib/inclusionScoreDescriptions'
import Card from '@/components/Card'
import Dropdown from '@/app/dashboard/_components/Dropdown'
import WeeklyInclusionScoreItem from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScoreItem'
import Skeleton from '@/app/dashboard/_components/Skeleton'

type WeeklyInclusionScoreProps = {
  title?: string
}

const WeeklyInclusionScore = ({
  title = 'Weekly inclusion score',
}: WeeklyInclusionScoreProps) => {
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
          descriptions,
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
    <Card classname='col-span-full xl:col-span-2'>
      {isLoading && (
        <div className='space-y-6'>
          <Skeleton className='h-7 w-full' />
          <Skeleton className='h-44 w-full md:h-56' />
        </div>
      )}
      {weeks && currentWeek && (
        <div className='flex flex-col items-start justify-between gap-2 sm:flex-row lg:flex-col'>
          <h3 className='font-heading text-xl font-bold'>{title}</h3>
          <Dropdown
            onSelect={(value) => update(value)}
            selected={currentWeek}
            options={weeks}
            formater={formatWeek}
            align='start'
          />
        </div>
      )}
      {currentData && (
        <div className='mt-6 flex flex-col gap-4 text-xs'>
          {currentData.map(({ name, score, trend, benchmark, desc }) => (
            <WeeklyInclusionScoreItem
              key={currentWeek + name}
              name={name}
              score={score}
              trend={trend}
              benchmark={benchmark}
              desc={desc}
            />
          ))}
        </div>
      )}
    </Card>
  )
}

export default WeeklyInclusionScore
