'use client'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <InclusionScore />
      <WeeklyInclusionScore />
    </GeneralGridLayout>
  )
}

export default Dashboard
