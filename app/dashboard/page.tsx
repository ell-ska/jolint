'use client'

import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'

import Risks from '@/app/dashboard/_components/RisksAndOpps'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <WeeklyInclusionScore />
    </GeneralGridLayout>
  )
}

export default Dashboard
