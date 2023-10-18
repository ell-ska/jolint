'use client'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/utils/classnames'
import ChapterIcon from '@/app/consent-form/_components/chapter/ChapterIcons'

export type State = 'unlocked' | 'disabled' | 'done'
export type Icon = 'introduction' | 'purpose' | 'rights' | 'consent'

type ChapterProps = {
  state: State
  icon: Icon
  title: string
  desc: string
}

const Chapter = ({ state, icon, title, desc }: ChapterProps) => {
  return (
    <div
      className={cn(
        'aspect-square space-y-6 rounded-xl border border-neutral-400 bg-neutral-100 p-6',
        state === 'disabled' && 'bg-neutral-200 text-neutral-700',
      )}
    >
      <div className='flex justify-between'>
        <ChapterIcon icon={icon} state={state} />
        <Checkbox.Root
          className='h-6 w-6 rounded-md border-neutral-400 data-[state=unchecked]:border data-[state=checked]:bg-green'
          checked={state === 'done'}
        >
          <Checkbox.Indicator>
            <Check className='text-neutral-100' />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <div className='space-y-2'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Chapter
