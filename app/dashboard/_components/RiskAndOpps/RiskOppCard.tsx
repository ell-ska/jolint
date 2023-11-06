import Card from '@/components/Card'
import { risksData } from '@/app/dashboard/_components/RiskAndOpps/data/RisksData'
import { opportunitiesData } from '@/app/dashboard/_components/RiskAndOpps/data/OpportunitiesData'

type RiskOppCardsProps = {
  type: 'risks' | 'opportunities'
}

const RiskOppCards = ({ type }: RiskOppCardsProps) => {
  const data = type === 'risks' ? risksData : opportunitiesData

  return (
    <div className='gap-8'>
      {data.map((item) => (
        <Card key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default RiskOppCards
