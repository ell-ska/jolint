import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

import Card from '@/components/Card'

const TrendContent = [
  {
    data: [
      {
        trend: 'Working on weekends has decreased by 20%',
        isPositive: true,
      },
      {
        trend:
          'Managers whose close interactions are diverse have more inclusive teams',
        isPositive: true,
      },
      {
        trend: 'Influence gap between genders is closing',
        isPositive: true,
      },
      {
        trend: 'Most gatekeepers are men',
        isPositive: false,
      },
      {
        trend:
          'New hires with immigrant background have less broad networks after 1 year',
        isPositive: false,
      },
    ],
  },
]

const Trends = () => {
  return (
    <div className='col-span-full h-min lg:col-span-2'>
      <h2 className='mb-4 ml-4 font-heading text-3xl font-bold md:text-4xl'>
        Trends
      </h2>
      <Card>
        {TrendContent[0].data.map((item, index) => (
          <div key={index} className='mb-6 flex items-center gap-3'>
            {item.isPositive ? (
              <ArrowUpCircle size={24} className='shrink-0 text-green' />
            ) : (
              <ArrowDownCircle size={24} className='shrink-0 text-red' />
            )}
            <p>{item.trend}</p>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default Trends
