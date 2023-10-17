import Footer from '@/app/consent-form/_components/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
