import Accordion from '@/components/Accordion'

const advantages = [
  {
    trigger: 'Anonymous and objective analysis',
    content:
      'Jolints system assigns a unique anonymized ID to every employee, ensuring privacy. AI and machine learning algorithms analyze the data, unlocking valuable insights for informed decision-making.',
  },
  {
    trigger: 'More aware employers',
    content:
      'Jolints objective and quantifiable  methods measure the access to information people have depending on their role at an organisation and other social parameters',
  },
  {
    trigger: 'Healthier work enviroment',
    content:
      'Jolint fosters a healthier work environment by providing data-driven insights. Promote well-being, collaboration, and positivity for a thriving workplace.',
  },
]

const Advantages = () => {
  return (
    <section className='mt-20 md:mt-28'>
      <h3 className='mb-12 text-center font-heading text-2xl font-bold md:mb-16 md:text-4xl'>
        Advantages with Jolint at your workplace
      </h3>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
        {advantages.map(({ trigger, content }) => (
          <Accordion
            className='space-y-4 rounded-2xl border-2 border-blue-dull p-6 md:p-8'
            key={trigger}
            trigger={<h4 className='text-lg font-bold'>{trigger}</h4>}
            content={<p>{content}</p>}
            icon
          />
        ))}
      </div>
    </section>
  )
}

export default Advantages
