'use client'

import GeneralGridLayout from '@/app/dashboard/_components/GeneralGridLayout'
import { CardHeaderProps } from '@/utils/types'

// Testing code
import Card from '@/components/Card'
import CardHeader from './_components/CardHeader'

// Prop testing
const onSelectTestFunction = (option: string) => {
  console.log({ option })
}

const CardheaderProps: CardHeaderProps = {
  title: 'title',
  currentData: [
    { metric: 'men', circleColor: 'bg-orange' },
    { metric: 'women', circleColor: 'bg-blue-bright' },
  ],
  options: ['option 1', 'option 2'],
  selected: 'option x',
  onSelect: onSelectTestFunction,
}
// ------------

const Dashboard = () => {
  return (
    <GeneralGridLayout>
      <Card classname='bg-neutral-600 col-span-4'>
        <CardHeader {...CardheaderProps} />
      </Card>
    </GeneralGridLayout>
  )
}

export default Dashboard
