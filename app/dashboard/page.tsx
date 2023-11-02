'use client'

import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import InclusionOfNewHires from '@/app/dashboard/_components/cards/InclusionOfNewHires/InclusionOfNewHires'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <WeeklyInclusionScore />
      <InclusionOfNewHires />
    </GeneralGridLayout>
  )
}

export default Dashboard
