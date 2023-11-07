import Footer from '@/app/consent-form/_components/Footer'
import Header from '@/app/consent-form/_components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jolint | Consent form',
  description: 'Creating inclusive work cultures',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
