import * as Dialog from '@radix-ui/react-dialog'
import { HelpCircle } from 'lucide-react'

const HowItWorks = () => {
  return (
    <div className='relative top-0'>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className='cursor-pointer'>
            <HelpCircle className='mt-1' />
          </div>
        </Dialog.Trigger>
        <Dialog.Content
          asChild
          className='absolute right-full top-0 z-50 mr-2 w-64 rounded-lg border border-neutral-400 bg-neutral-100 p-4 outline-0'
        >
          <p className='text-sm'>
            Jolint is an AI-powered tool that enhances workplace inclusion by
            anonymously analyzing communication patterns, thereby providing
            insights on metrics of inclusion in an integrity preserving manner.
          </p>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

export default HowItWorks
