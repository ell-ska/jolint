import Card from '@/components/Card'

const risks = [
  {
    title: 'Isolation',
    description: '14% of employees are at risk of being isolated',
  },
  {
    title: 'Leadership access',
    description: 'Women have less access to leadership than men',
  },
  {
    title: 'Segregation',
    description: 'Cross-functional work is highly segregated between genders',
  },
  {
    title: 'Onboarding',
    description: 'New-hires don’t have many connections after 1 year',
  },
]

const Risks = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {risks.map((x) => (
        <Card
          key={x.title}
          classname='md:col-span-6 col-span-3 w-96 rounded-8 mt-4 gap-2'
        >
          <h3 className='font-heading font-bold'>{x.title}</h3>
          <p>{x.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default Risks
