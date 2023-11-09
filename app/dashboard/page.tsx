'use client'

import Toaster from '@/components/Toaster'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import InclusionScore from '@/app/dashboard/_components/cards/InclusionScore/InclusionScore'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'
import InclusionOfNewHires from '@/app/dashboard/_components/cards/InclusionOfNewHires/InclusionOfNewHires'
import Differences from '@/app/dashboard/_components/cards/Differences/Differences'
import Trends from '@/app/dashboard/_components/cards/Trends'
import RiskAndOppsSection from '@/app/dashboard/_components/RiskAndOpps/RiskAndOpportunitiesSection'

const Dashboard = () => {
  return (
    <>
      <Toaster />
      <GeneralGridLayout>
        <InclusionScore />
        <WeeklyInclusionScore />
        <InclusionOfNewHires />
        <Differences />
        <Trends />
        <RiskAndOppsSection />
      </GeneralGridLayout>
    </>
  )
}

export default Dashboard
