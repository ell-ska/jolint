'use client'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import Trends from '@/app/dashboard/_components/cards/Trends'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'

import EntireSection from '@/app/dashboard/_components/RiskAndOpps/EntireSection'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <InclusionScore />
      <WeeklyInclusionScore />
      <Trends />
      <EntireSection />
    </GeneralGridLayout>
  )
}

export default Dashboard
