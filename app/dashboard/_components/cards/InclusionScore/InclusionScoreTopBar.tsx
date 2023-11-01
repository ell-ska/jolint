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
    <div className='relative z-10 flex flex-col items-start justify-between sm:flex-row md:items-center lg:flex-row'>
      <h3 className='pr-8 font-heading text-xl font-bold lg:w-1/5'>{title}</h3>
      <div className='flex flex-row items-center gap-1 text-base lg:w-3/5'>
        <div className='flex items-center'>
          <div className='h-2 w-2 rounded-full bg-[#91BBE7]'></div>
          <p className='px-1'>{companyAverage}</p>
        </div>
        <div className='flex items-center'>
          <div className='h-2 w-2 rounded-full bg-[#0015CE]'></div>
          <p className='px-1'>Team {team}</p>
        </div>
      </div>
      <div className='flex pr-2 min-w-[88px] lg:justify-end'>
        <Dropdown
          onSelect={(value) => setSelectedTeam(value)}
          selected={selectedTeam}
          options={teams}
          align='start'
        />
      </div>
    </div>
  )
}

export default InclusionScoreTopBar
