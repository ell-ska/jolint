import IMG1 from '@/public/klaudia.png'
import IMG2 from '@/public/faheem.png'

const coFounderData = [
  {
    title: 'Klaudia Mur',
    desc: 'I am a data scientist and physicist. My background in Complex Adaptive Systems has fueled my passion for understanding how people interact, communicate, and collaborate in the workplace. My mission is to use data-driven analysis to make the workplace a better place for employees, by understanding the complexities of human interactions and finding ways to improve them. Join me on my journey to enhance workplace culture and improve the work environment. With my expertise in data analysis and understanding of human behavior, I am committed to leading the way towards a more inclusive and equitable work culture for all',
    image: IMG1,
  },
  {
    title: 'Faheem Shah',
    desc: 'As the co-founder of Jolint, I bring a wealth of expertise in organizational communication and collaboration to the table. With a background in international politics, communication studies, and specialized training in these areas, I understand the intricacies and nuances of effective communication within organizations. My passion for this field led me to start Jolint, with the goal of empowering companies to create more inclusive and equitable work cultures. Join me in my journey with Jolint, as we work together to improve communication and collaboration within organizations for a more inclusive work environment.',
    image: IMG2,
  },
]

const CoFoundersSection = () => {
  return (
    <section className='pt-20 md:pt-28'>
      <h3 className='font-heading text-2xl font-bold text-neutral-900 md:text-4xl'>
        Co-Founders
      </h3>
      <div className='flex flex-col gap-12 md:gap-20'></div>
    </section>
  )
}

export default CoFoundersSection
