import Footer from '@/app/consent-form/_components/Footer'
import { Header } from './_components/Header'

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
