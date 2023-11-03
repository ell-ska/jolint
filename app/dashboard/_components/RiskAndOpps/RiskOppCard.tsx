import Card from '@/components/Card'
import { risksData } from '@/app/dashboard/_components/RiskAndOpps/data/RisksData'
import { opportunitiesData } from '@/app/dashboard/_components/RiskAndOpps/data/OpportunitiesData'

const RiskOppCards = ({ type }) => {
  const data = type === 'risks' ? risksData : opportunitiesData

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {data.map((item) => (
        <Card
          key={item.title}
          classname='md:col-span-6 col-span-3 rounded-8 mt-4 gap-2'
        >
          <h3 className='font-heading font-bold'>{item.title}</h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default RiskOppCards
