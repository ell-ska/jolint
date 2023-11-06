import Card from '@/components/Card'

// Assuming you have a type for the card data
type CardData = {
  title: string
  description: string
}

type SectionProps = {
  title: string
  items: CardData[]
}

const Section = ({ title, items }) => {
  return (
    <section>
      <h2 className='mb-4 ml-4 font-heading text-3xl font-bold md:text-4xl'>
        {title}
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className='font-heading font-bold'>{item.title}</h3>
            <p className='flex-grow'>{item.description}</p>{' '}
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Section
