import { Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='space-y-8 bg-blue-dull px-32 pb-8 pt-20 text-neutral-100'>
      <div className='flex justify-between'>
        <div className='space-y-4'>
          <p>Jolint Network Analytics AB</p>
          <p>Org. Nr.559324-1770</p>
          <p>Gothenburg, Sweden</p>
        </div>
        <div className='space-y-4'>
          <p className='flex gap-4'>
            <Linkedin /> Jolint
          </p>
          <p className='flex gap-4'>
            <Mail /> hello@jolint.com
          </p>
        </div>
      </div>
      <p className='text-center'>
        Copyright © 2023 Jolint | Powered by Jolint
      </p>
    </footer>
  )
}

export default Footer
