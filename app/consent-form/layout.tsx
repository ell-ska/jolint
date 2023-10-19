import Footer from '@/app/consent-form/_components/Footer'
import Header from '@/app/consent-form/Header_components/Header'

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
