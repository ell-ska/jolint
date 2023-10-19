<<<<<<< HEAD
import Header from '@/app/consent-form/_components/Header'
import Footer from '@/app/consent-form/_components/Footer'
=======
import Footer from '@/app/consent-form/_components/Footer'
import Header from '@/app/consent-form/_components/Header'
>>>>>>> fix/j41-create-header-consent-form

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
