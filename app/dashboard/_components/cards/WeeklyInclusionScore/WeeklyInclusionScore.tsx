'use client'

import { useState } from 'react'

import { formatWeek } from '@/utils/formatWeek'
import Card from '@/components/Card'
import Dropdown from '@/app/dashboard/_components/Dropdown'
import WeeklyInclusionScoreItem from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScoreItem'

const isoWeeks = ['2022-W45', '2022-W46', '2022-W47']

type WeeklyInclusionScoreProps = {
  title?: string
}

const WeeklyInclusionScore = ({
  title = 'Weekly inclusion score',
}: WeeklyInclusionScoreProps) => {
  const [week, setWeek] = useState(formatWeek(isoWeeks[0]))

  return (
    <Card classname='col-span-full md:col-span-2 h-min'>
      <div>
        <h3 className='mb-2 font-heading text-xl font-bold'>{title}</h3>
        <Dropdown
          onSelect={(value) => setWeek(value)}
          selected={week}
          options={isoWeeks.map((week) => formatWeek(week))}
          align='start'
        />
      </div>
      <div className='mt-6 flex flex-col gap-4 text-xs'>
        <WeeklyInclusionScoreItem
          name='Team interactions'
          score={38}
          trend={-12}
          benchmark={50}
        />
        <WeeklyInclusionScoreItem
          name='Cross-functional interaction'
          score={87}
          trend={+3}
          benchmark={50}
        />
      </div>
    </Card>
  )
}

export default WeeklyInclusionScore
