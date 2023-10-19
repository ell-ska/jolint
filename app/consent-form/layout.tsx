import Header from '@/app/consent-form/_components/Header'
import Footer from '@/app/consent-form/_components/Footer'

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
