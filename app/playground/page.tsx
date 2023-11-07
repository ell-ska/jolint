'use client'

import { useData } from '@/hooks/useData'
import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import { CardHeaderProps } from '@/utils/types'

// Testing code
import Card from '@/components/Card'
import CardHeader from '@/app/dashboard/_components/CardHeader'

// Prop testing
const onSelectTestFunction = (option: string) => {
  console.log({ option })
}

const CardheaderProps: CardHeaderProps = {
  title: 'title',
  currentMetrics: [
    { metric: 'men', circleColor: 'bg-orange' },
    { metric: 'women', circleColor: 'bg-blue-bright' },
  ],
  dropdown: {
    options: ['option 1', 'option 2'],
    selected: 'option x',
    onSelect: onSelectTestFunction,
  },
}
// ------------

const Dashboard = () => {
  const data = useData('inclusionscore')
  console.log(data)

  return (
    <GeneralGridLayout>
      <Card classname='bg-neutral-600 col-span-4'>
        <CardHeader {...CardheaderProps} />
      </Card>
    </GeneralGridLayout>
  )
}

export default Dashboard
