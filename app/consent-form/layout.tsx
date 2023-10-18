import { ReactNode } from 'react'

import Title from './_components/Title'
// import Footer from './_components/Footer'
import { Header } from './_components/Header'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Title text='Consent Form for data processing' />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
