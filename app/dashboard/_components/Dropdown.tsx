'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/utils/classnames'
import { DropdownProps } from '@/utils/types'

const Dropdown = ({
  options,
  selected,
  onSelect,
  align = 'end',
  formater,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='group flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1 text-xs outline-none'>
          {formater ? formater(selected) : selected}
          <ChevronDown
            size={14}
            className='text-neutral-400 group-data-[state=open]:hidden'
          />
          <ChevronUp
            size={14}
            className='text-neutral-400 group-data-[state=closed]:hidden'
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align={align}
        className='z-50 mt-2 flex flex-col overflow-hidden rounded-lg border border-neutral-400 bg-neutral-100 text-xs'
      >
        {options.map((option) => (
          <DropdownMenu.Item
            key={option}
            onSelect={() => onSelect(option)}
            className={cn(
              'cursor-pointer px-2 py-2 outline-none hover:bg-neutral-200',
              option === selected && 'font-bold',
            )}
          >
            {formater ? formater(option) : option}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Dropdown
