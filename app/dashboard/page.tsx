'use client'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import Trends from '@/app/dashboard/_components/cards/Trends'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'

import Risks from '@/app/dashboard/_components/RisksAndOpps'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <InclusionScore />
      <WeeklyInclusionScore />
      <Trends />
    </GeneralGridLayout>
  )
}

export default Dashboard
