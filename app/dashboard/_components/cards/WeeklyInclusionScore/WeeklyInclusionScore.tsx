'use client'

import { useState } from 'react'

import { formatWeek } from '@/utils/formatWeek'
import Card from '@/components/Card'
import Dropdown from '@/app/dashboard/_components/Dropdown'
import WeeklyInclusionScoreItem from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScoreItem'

const fakeData = [
  {
    week: '2023-W44',
    data: [
      {
        name: 'Team interactions',
        score: 38,
        trend: -2,
        benchmark: 50,
      },
      {
        name: 'Cross-functional interaction',
        score: 94,
        trend: +4,
        benchmark: 50,
      },
      {
        name: 'Informal influence',
        score: 59,
        trend: 0,
        benchmark: 50,
      },
      {
        name: 'Work habits',
        score: 68,
        trend: +1,
        benchmark: 50,
      },
    ],
  },
  {
    week: '2023-W43',
    data: [
      {
        name: 'Team interactions',
        score: 40,
        trend: +2,
        benchmark: 50,
      },
      {
        name: 'Cross-functional interaction',
        score: 90,
        trend: +3,
        benchmark: 50,
      },
      {
        name: 'Informal influence',
        score: 59,
        trend: -4,
        benchmark: 50,
      },
      {
        name: 'Work habits',
        score: 67,
        trend: +9,
        benchmark: 50,
      },
    ],
  },
  {
    week: '2023-W42',
    data: [
      {
        name: 'Team interactions',
        score: 38,
        trend: -12,
        benchmark: 50,
      },
      {
        name: 'Cross-functional interaction',
        score: 87,
        trend: +3,
        benchmark: 50,
      },
      {
        name: 'Informal influence',
        score: 63,
        trend: -2,
        benchmark: 50,
      },
      {
        name: 'Work habits',
        score: 58,
        trend: +5,
        benchmark: 50,
      },
    ],
  },
]

type WeeklyInclusionScoreProps = {
  title?: string
}

const WeeklyInclusionScore = ({
  title = 'Weekly inclusion score',
}: WeeklyInclusionScoreProps) => {
  const [week, setWeek] = useState(fakeData[0].week)
  const currentWeekData = fakeData.find((data) => data.week === week)

  return (
    <Card classname='col-span-full lg:col-span-2 h-min'>
      <div className='flex flex-col items-start justify-between gap-2 sm:flex-row lg:flex-col'>
        <h3 className='font-heading text-xl font-bold'>{title}</h3>
        <Dropdown
          onSelect={(value) => setWeek(value)}
          selected={week}
          options={fakeData.map((item) => item.week)}
          formater={formatWeek}
          align='start'
        />
      </div>
      <div className='mt-6 flex flex-col gap-4 text-xs'>
        {currentWeekData?.data.map(({ name, score, trend, benchmark }) => (
          <WeeklyInclusionScoreItem
            key={week + name}
            name={name}
            score={score}
            trend={trend}
            benchmark={benchmark}
          />
        ))}
      </div>
    </Card>
  )
}

export default WeeklyInclusionScore
