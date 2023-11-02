'use client'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'
import Trends from '@/app/dashboard/_components/cards/Trends'

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
