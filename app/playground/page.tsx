'use client'
import Dropdown from '@/app/dashboard/_components/Dropdown'

const Playground = () => {
  return (
    <div className='p-20'>
      <Dropdown
        onSelect={(value) => console.log(value)}
        options={['it', 'hr', 'something long']}
        selected='hr'
      />
    </div>
  )
}

export default Playground
