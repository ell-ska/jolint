'use client'
import Dropdown from './_components/Dropdown'

const Dashboard = () => {
  return (
    <div className='p-20'>
      <Dropdown
        onSelect={() => {}}
        options={['hej', 'test', 'nått långt']}
        selected={'hej'}
      />
    </div>
  )
}

export default Dashboard
