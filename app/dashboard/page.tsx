'use client'

import Toaster from '@/components/Toaster'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import Trends from '@/app/dashboard/_components/cards/Trends'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'

const Dashboard = () => {
  return (
    <>
      <Toaster />
      <GeneralGridLayout>
        <InclusionScore />
        <WeeklyInclusionScore />
        <Trends />
      </GeneralGridLayout>
    </>
  )
}

export default Dashboard
