'use client'

import Dropdown from '@/app/dashboard/_components/Dropdown'
import { cn } from '@/utils/classnames'
import { CardHeaderProps } from '@/utils/types'

const CardHeader = ({ title, currentMetrics, dropdown }: CardHeaderProps) => {
  return (
    <div className='flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center md:justify-between'>
      <h3 className='font-heading text-xl font-bold'>{title}</h3>
      <div className='flex flex-col gap-2 md:flex-row'>
        <div className='flex gap-2'>
          {currentMetrics?.map(({ metric, circleColor }) => (
            <div key={metric} className='flex items-center gap-1'>
              <div className={cn('h-2 w-2 rounded-full', circleColor)} />
              <p className='text-xs'>{metric}</p>
            </div>
          ))}
        </div>
        <Dropdown {...dropdown} />
      </div>
    </div>
  )
}

export default CardHeader
