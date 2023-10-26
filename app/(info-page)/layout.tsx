import Header from '@/app/(info-page)/_components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='relative px-6 pb-12 pt-20 md:px-20 md:pb-20 md:pt-28'>
        {children}
      </main>
    </>
  )
}

export default Layout
