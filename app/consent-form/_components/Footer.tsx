import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-blue-dull px-8 text-center text-base text-neutral-100 md:space-y-8 md:px-32 md:pb-8 md:pt-20 md:text-left md:text-xl'>
      <div className='flex flex-col items-center pt-8 md:flex-row md:justify-between'>
        <div className='space-y-2 md:space-y-4'>
          <p>Jolint Network Analytics AB</p>
          <p>Org. Nr.559324-1770</p>
          <p>Gothenburg, Sweden</p>
        </div>
        <div className='flex flex-col items-center space-y-2 py-12 text-xl md:items-start md:space-y-4 md:py-0'>
          <Link
            href='https://www.linkedin.com/company/jolint-network-analytics-ab/'
            className='flex gap-4'
          >
            <Linkedin /> Jolint
          </Link>
          <Link href='mailto:hello@jolint.com' className='flex gap-4'>
            <Mail /> hello@jolint.com
          </Link>
        </div>
      </div>
      <p className='pb-4 text-center'>
        Copyright © 2023 Jolint | Powered by Jolint
      </p>
    </footer>
  )
}

export default Footer
