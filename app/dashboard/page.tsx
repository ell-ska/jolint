import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import Timeline from '@/app/dashboard/_components/InclusionScoreTimeline'

const Dashboard = () => {
  return (
    <>
      <GeneralGridLayout>
        <Timeline />
        <div className='col-start-5 col-end-6 row-start-1 row-end-2 bg-green'></div>
        <div className='col-start-1 col-end-3 row-start-3 row-end-4 bg-green'></div>
        <div className='col-start-4 col-end-6 row-start-3 row-end-4 bg-green'></div>
        <div className='col-start-1 col-end-2 row-start-5 row-end-6 bg-green'></div>
        <div className='col-start-3 col-end-6 row-start-5 row-end-6 bg-green'></div>
      </GeneralGridLayout>
    </>
  )
}

export default Dashboard
