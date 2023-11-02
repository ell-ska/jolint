'use client'

import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import Trends from '@/app/dashboard/_components/cards/Trends'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <WeeklyInclusionScore />
      <Trends />
    </GeneralGridLayout>
  )
}

export default Dashboard
