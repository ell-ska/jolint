'use client'

import { useState } from 'react'

import Card from '@/components/Card'
import CardHeader from '@/app/dashboard/_components/CardHeader'
import InclusionOfNewHiresChart from '@/app/dashboard/_components/cards/InclusionOfNewHires/InclusionOfNewHiresChart'

const fakeData = [
  {
    demographic_category: 'Gender',
    demographic_value: 'Male',
    variation: 53.1173113189,
  },
  {
    demographic_category: 'Gender',
    demographic_value: 'Female',
    variation: 42.008177974,
  },
  {
    demographic_category: 'Gender',
    demographic_value: 'Non-Binary',
    variation: 45.9125760396,
  },
  {
    demographic_category: 'Age Group',
    demographic_value: '18-25',
    variation: 38.1924863752,
  },
  {
    demographic_category: 'Age Group',
    demographic_value: '26-35',
    variation: 56.5897195942,
  },
  {
    demographic_category: 'Age Group',
    demographic_value: '36-45',
    variation: 52.9797421484,
  },
  {
    demographic_category: 'Age Group',
    demographic_value: '46-55',
    variation: 65.3888535223,
  },
  {
    demographic_category: 'Age Group',
    demographic_value: '56+',
    variation: 59.6451771796,
  },
]

const colors = [
  'bg-blue-bright',
  'bg-orange',
  'bg-green',
  'bg-red',
  'bg-blue-light',
]

const InclusionOfNewHires = () => {
  const [demographic, setDemographic] = useState(
    fakeData[0].demographic_category,
  )
  const currentDemographicData = fakeData.filter(
    (data) => data.demographic_category === demographic,
  )

  const allDemographics = fakeData.map((data) => data.demographic_category)
  const uniqueDemographics = allDemographics.filter(
    (item, index) => allDemographics.indexOf(item) === index,
  )

  const currentMetrics = currentDemographicData
    .map((data) => data.demographic_value)
    .map((metric, index) => ({ metric, circleColor: colors[index] }))

  return (
    <Card classname='col-span-full lg:col-span-3 h-min'>
      <CardHeader
        title='Inclusion of new hires'
        currentMetrics={currentMetrics}
        dropdown={{
          options: uniqueDemographics,
          onSelect: (value) => setDemographic(value),
          selected: demographic,
        }}
      />
    </Card>
  )
}

export default InclusionOfNewHires
