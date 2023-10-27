import OurMissionSection from '@/app/(info-page)/_components/OurMissionSection'
import CoFoundersSection from '@/app/(info-page)/_components/CoFoundersSection'

const Background = () => {
  return (
    <div className='absolute inset-0 -z-10 bg-gradient-to-b from-[#EEF3F8]' />
  )
}

const About = () => {
  return (
    <section className='min-h-[calc(100vh-5rem)] pt-20 md:min-h-[calc(100vh-7rem)] md:pt-28'>
      <Background />
      <h1 className='font-heading text-3xl font-bold capitalize md:text-5xl'>
        about us
      </h1>
      <OurMissionSection />
      <CoFoundersSection />
    </section>
  )
}

export default About
