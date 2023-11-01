'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Dropdown from '@/app/dashboard/_components/Dropdown'

type InclusionScoreProps = {
  title?: string
}

const InclusionScore = ({
  title = 'Inclusion score',
}: InclusionScoreProps) => {


  return (
    <Card classname='col-span-full lg:col-span-4 h-min'>
      <div className='flex flex-col items-start justify-between gap-2 sm:flex-row lg:flex-col'>
        <h3 className='font-heading text-xl font-bold'>{title}</h3>
        <Dropdown
          onSelect={(value) => 'one'}
          selected={'week'}
          options={['one', 'two']}
          align='start'
        />
      </div>
    </Card>
  )
}

export default InclusionScore