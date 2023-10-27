'use client'

import Dropdown from './Dropdown'
import { cn } from '@/utils/classnames'
import { CardHeaderProps } from '@/utils/types'

const CardHeader = ({
  title,
  currentData,
  options,
  onSelect,
  selected,
}: CardHeaderProps) => {
  return (
    <div className='flex flex-col items-start gap-2 md:flex-row md:flex-wrap lg:items-center md:justify-between'>
      <h3 className='font-heading text-xl font-bold capitalize'>{title}</h3>
      <div className='flex flex-col gap-2 md:flex-row'>
        <div className='flex gap-2'>
          {currentData?.map(({ metric, circleColor }) => (
            <div key={metric} className='flex items-center gap-1'>
              <div className={cn('h-2 w-2 rounded-full', circleColor)} />
              <p className='text-xs capitalize'>{metric}</p>
            </div>
          ))}
        </div>
        <Dropdown options={options} onSelect={onSelect} selected={selected} />
      </div>
    </div>
  )
}

export default CardHeader


//TODO
// breakpoint styling 