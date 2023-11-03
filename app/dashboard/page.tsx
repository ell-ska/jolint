'use client'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import Trends from '@/app/dashboard/_components/cards/Trends'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'
import Toaster from '@/components/Toaster'

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
