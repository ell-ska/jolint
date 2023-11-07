'use client'

import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import Differences from '@/app/dashboard/_components/cards/Differences/Differences'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <WeeklyInclusionScore />
      <Differences />
    </GeneralGridLayout>
  )
}

export default Dashboard
