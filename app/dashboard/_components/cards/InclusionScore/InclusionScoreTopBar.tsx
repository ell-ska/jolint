'use client'
import Dropdown from '@/app/dashboard/_components/Dropdown'

type InclusionScoreProps = {
  title?: string
  companyAverage: string
  team: string
  teams: string[]
  selectedTeam: string
  setSelectedTeam: React.Dispatch<React.SetStateAction<string>>
}

const InclusionScoreTopBar = ({
  title = 'Timeline',
  companyAverage = 'Company average',
  team = 'Team HR',
  teams,
  selectedTeam,
  setSelectedTeam,
}: InclusionScoreProps) => {
  return (
    <div className='flex flex-col items-center justify-between gap-2 sm:flex-row lg:flex-row'>
      <h3 className='pr-8 font-heading text-xl font-bold'>{title}</h3>
      <div className='flex flex-row items-center text-base'>
        <p className='px-1'>
          <span className='h-2 w-2 rounded-full bg-[#91BBE7] px-1'></span>
          {companyAverage}
        </p>
        <p className='px-1'>
          <span className='h-2 w-2 rounded-full bg-[#0015CE] px-1'></span>
          {team}
        </p>
      </div>
      <Dropdown
        onSelect={(value) => setSelectedTeam(value)}
        selected={selectedTeam}
        options={teams}
        align='start'
      />
    </div>
  )
}

export default InclusionScoreTopBar
