import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import WeeklyInclusionScore from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScore'

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <WeeklyInclusionScore />
    </GeneralGridLayout>
  )
}

export default Dashboard
