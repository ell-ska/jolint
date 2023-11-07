'use client'

import Toaster from '@/components/Toaster'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import Differences from '@/app/dashboard/_components/cards/Differences/Differences'
import Trends from '@/app/dashboard/_components/cards/Trends'

const Dashboard = () => {
  return (
    <>
      <Toaster />
      <GeneralGridLayout>
        <InclusionScore />
        <WeeklyInclusionScore />
        <Differences />
        <Trends />
      </GeneralGridLayout>
    </>
  )
}

export default Dashboard
