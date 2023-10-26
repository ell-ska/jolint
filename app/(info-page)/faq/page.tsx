import Accordion from '@/components/Accordion'

const QnA = [
  {
    question: 'Why do i need to sign a consent form?',
    answer:
      'To be able to help your organisation to improve inclusion and belonging, also create a more diverse and inclusive workplace, we at Jolint need your consent to collect your personal data.',
  },
  {
    question: 'How does AI analyze the data?',
    answer:
      'The algorithms look for patterns and relationships in the data, and will explore gender and age differences, uncovering variations in social influence and work patterns.',
  },
  {
    question: 'Do you read my emails and chats?',
    answer:
      'The content of communications and calendars is never viewed nor processed. Jolint will only be processing the metadata associated with those communication channels.',
  },
  {
    question: 'What result will I see?',
    answer:
      'You will access your team result as well as the result of the organisation.',
  },
  {
    question: 'How can inclusion help me at my workplace?',
    answer:
      'Research shows that diverse companies are more innovative and productive. A wide range of perspectives leads to a larger pool of knowledge and experiences to choose from, resulting in better decision making and problem solving.',
  },
  {
    question: 'How long will you save my data?',
    answer:
      'The data will be stored as long as Jolint has a collaboration with your organisation. This will make it possible to look for patterns on monthy and yearly basis. With that said, all your data will be anonymized and can not be lead to you.',
  },
]

const Faq = () => {
  return (
    <section className='min-h-[calc(100vh-5rem)] from-neutral-900 pt-20 md:min-h-[calc(100vh-7rem)] md:pt-28'>
      <div className='orange-gradient absolute inset-0 -z-10' />
      <h1 className='font-heading text-3xl font-bold md:text-5xl'>FAQ</h1>
      <p className='pt-6 text-lg md:pt-6 md:text-2xl'>
        Learn more about Jolint and our work method
      </p>
      <div className='pb-12 pt-8 md:grid md:grid-cols-3 md:gap-4 md:pt-20'>
        {QnA.map(({ question, answer }) => (
          <Accordion
            className='mt-6 flex flex-col justify-center rounded-2xl bg-neutral-100 p-4 md:mt-0'
            key={question}
            trigger={
              <h4 className='font-body text-lg font-bold md:text-xl'>
                {question}
              </h4>
            }
            content={<p className='pt-4 md:text-base'>{answer}</p>}
            icon
          />
        ))}
      </div>
    </section>
  )
}

export default Faq
