'use client'

import Dropdown from '@/app/dashboard/_components/Dropdown'
import { cn } from '@/utils/classnames'
import { CardHeaderProps } from '@/utils/types'

const CardHeader = ({ title, currentMetrics, dropdown }: CardHeaderProps) => {
  return (
    <div className='flex flex-col items-start gap-2 md:flex-row md:items-baseline md:justify-between'>
      <div className='flex flex-col flex-wrap gap-2 md:flex-grow md:flex-row md:justify-between'>
        <h3 className='font-heading text-xl font-bold'>{title}</h3>
        <div className='flex gap-2 whitespace-nowrap'>
          {currentMetrics?.map(({ metric, circleColor }) => (
            <div key={metric} className='flex items-center gap-1'>
              <div
                style={{
                  backgroundColor: circleColor.startsWith('#')
                    ? circleColor
                    : undefined,
                }}
                className={cn(
                  'h-2 w-2 rounded-full',
                  circleColor.startsWith('bg-') && circleColor,
                )}
              />
              <p className='text-xs'>{metric}</p>
            </div>
          ))}
        </div>
      </div>
      <Dropdown {...dropdown} />
    </div>
  )
}

export default CardHeader
