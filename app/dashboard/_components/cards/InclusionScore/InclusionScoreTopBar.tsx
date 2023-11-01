'use client'
import Dropdown from '@/app/dashboard/_components/Dropdown'

type InclusionScoreProps = {
  title?: string
  companyAverage: string
  team: string
}

const InclusionScoreTopBar = ({
  title = 'Timeline',
  companyAverage = 'Company average',
  team = 'Team HR',
}: InclusionScoreProps) => {
  return (
      <div className='flex flex-col items-center justify-between gap-2 sm:flex-row lg:flex-row'>
        <h3 className='font-heading text-xl font-bold pr-8'>{title}</h3>
        <div className='flex flex-row items-center text-base'>
          <p className='px-1'>
            <span className='h-2 w-2 rounded-full bg-[#91BBE7] px-1'></span>
            {String(companyAverage)}
          </p>
          <p className='px-1'>
            <span className='h-2 w-2 rounded-full bg-[#0015CE] px-1'></span>
            {String(team)}
          </p>
        </div>
        <Dropdown
          onSelect={(value) => 'team'}
          selected={'team'}
          options={['one', 'two']}
          align='start'
        />
      </div>
  )
}

export default InclusionScoreTopBar
