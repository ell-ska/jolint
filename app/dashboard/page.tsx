'use client'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import InclusionScoreComp from './_components/cards/InclusionScore/InclusionScoreComp'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <InclusionScoreComp />
      <WeeklyInclusionScore />
    </GeneralGridLayout>
  )
}

export default Dashboard
