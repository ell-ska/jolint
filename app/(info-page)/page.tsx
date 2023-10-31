import Hero from '@/app/(info-page)/_components/Hero'
import Advantages from '@/app/(info-page)/_components/Advantages'
import InclusionSection from '@/app/(info-page)/_components/InclusionSection'
import HowItWorks from '@/app/(info-page)/_components/HowItWorks/HowItWorks'

const Home = () => {
  return (
    <>
      <Hero />
      <InclusionSection />
      <Advantages />
      <HowItWorks />
    </>
  )
}

export default Home
