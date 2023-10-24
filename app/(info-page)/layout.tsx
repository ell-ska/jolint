import Header from '@/app/(info-page)/_components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='px-6 pt-20 md:px-20 md:pt-28'>{children}</main>
    </>
  )
}

export default Layout
