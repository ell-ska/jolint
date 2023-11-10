'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  trigger: React.ReactNode
  content: React.ReactNode
  icon?: boolean
  className?: string
}

const Accordion = ({ trigger, content, icon, className }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root type='single' collapsible>
      <AccordionPrimitive.Item value='accordion' className={className}>
        <AccordionPrimitive.Trigger asChild className='group cursor-pointer'>
          <div className='flex items-center justify-between gap-4'>
            {trigger}
            {icon && (
              <ChevronDown className='shrink-0 group-data-[state=open]:rotate-180' />
            )}
          </div>
        </AccordionPrimitive.Trigger>
        <AccordionPrimitive.Content asChild>
          {content}
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  )
}

export default Accordion
