'use client'
import Dropdown from '../dashboard/_components/Dropdown'

const Playground = () => {
  return (
    <main className='flex justify-between bg-green p-8'>
      <Dropdown
        onSelect={() => {}}
        options={['hello', 'im left aligned']}
        selected='hello'
        align='start'
      />
      <Dropdown
        onSelect={() => {}}
        options={['test', 'veeeeeery long test', 'right aligned']}
        selected='test'
      />
    </main>
  )
}

export default Playground
