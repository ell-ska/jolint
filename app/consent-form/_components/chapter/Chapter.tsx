'use client'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/utils/classnames'
import ChapterIcon from '@/app/consent-form/_components/chapter/ChapterIcons'

export type State = 'unlocked' | 'locked' | 'done'
export type Icon = 'introduction' | 'purpose' | 'rights' | 'consent'

type ChapterProps = {
  state: State
  icon: Icon
  title: string
  desc: string
  onClick: () => void
}

const Chapter = ({ state, icon, title, desc, onClick }: ChapterProps) => {
  return (
    <button
      className={cn(
        'flex flex-col gap-4 rounded-xl border border-neutral-400 bg-neutral-100 p-4 text-left transition md:gap-6 md:p-6 xl:aspect-square',
        state === 'locked' && 'bg-neutral-200 text-neutral-700',
        state === 'unlocked' && 'hover:scale-[1.02]',
      )}
      disabled={state === 'locked'}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      <div className='flex w-full justify-between'>
        <ChapterIcon
          icon={icon}
          state={state}
          className='h-8 w-8 md:h-12 md:w-12'
        />
        <Checkbox.Root
          asChild
          className='h-6 w-6 rounded-md border-neutral-400 data-[state=unchecked]:border data-[state=checked]:bg-green'
          checked={state === 'done'}
        >
          <div>
            <Checkbox.Indicator>
              <Check className='text-neutral-100' />
            </Checkbox.Indicator>
          </div>
        </Checkbox.Root>
      </div>
      <div className='md:space-y-2'>
        <h3 className='text-lg font-bold md:text-2xl'>{title}</h3>
        <p>{desc}</p>
      </div>
    </button>
  )
}

export default Chapter
