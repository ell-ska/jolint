'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Info } from 'lucide-react'

type WeeklyInclusionScoreInfoType = {
  desc: string
}

const WeeklyInclusionScoreInfo = ({ desc }: WeeklyInclusionScoreInfoType) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Info size={16} className='text-neutral-600' />
      </Dialog.Trigger>
      <Dialog.Content className='absolute top-full z-50 ml-1 mt-1 max-w-sm rounded-lg border border-neutral-400 bg-neutral-100 p-2'>
        <p className='text-sm'>{desc}</p>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default WeeklyInclusionScoreInfo
