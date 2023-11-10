import * as Dialog from '@radix-ui/react-dialog'
import { HelpCircle } from 'lucide-react'

const HowItWorks = () => {
  return (
    <div className='relative'>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className='cursor-pointer'>
            <HelpCircle className='mt-1' />
          </div>
        </Dialog.Trigger>
        <Dialog.Content
          asChild
          className='absolute right-0 z-50 mt-3 w-64 rounded-lg border border-neutral-400 bg-neutral-100 p-4 outline-0'
        >
          <p className='text-sm'>
            Here is some information about how it works that shows on hover or
            click.
          </p>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

export default HowItWorks
