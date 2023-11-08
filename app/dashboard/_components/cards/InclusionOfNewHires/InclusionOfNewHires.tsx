'use client'

import { useCallback, useEffect, useState } from 'react'

import { useData } from '@/hooks/useData'
import { getUnique } from '@/utils/getUnique'
import { getCurrentMetrics } from '@/utils/getCurrentMetrics'
import Card from '@/components/Card'
import CardHeader from '@/app/dashboard/_components/CardHeader'
import InclusionOfNewHiresChart from '@/app/dashboard/_components/cards/InclusionOfNewHires/InclusionOfNewHiresChart'
import type { metrics } from '@/utils/types'

const InclusionOfNewHires = () => {
  const { data: initial, error, isLoading } = useData('demographic-timeline')
  const [currentDemographic, setCurrentDemographic] = useState<string | null>(
    null,
  )
  const [categories, setCategories] = useState<string[] | null>(null)
  const [currentMetrics, setCurrentMetrics] = useState<metrics | null>(null)
  const [currentData, setCurrentData] = useState<any[] | null>(null)

  const update = useCallback(
    (demographic?: string) => {
      if (isLoading || error || !initial) return

      const data = initial?.demographic_timeline
      const currentDemographic = demographic || data[0].demographic_category
      const currentData = data.filter(
        (data: any) => data.demographic_category === currentDemographic,
      )

      setCurrentData(currentData)
      setCurrentDemographic(currentDemographic)
      setCategories(getUnique(data, 'demographic_category'))
      setCurrentMetrics(getCurrentMetrics(currentData, 'demographic_value'))
    },
    [initial, error, isLoading],
  )

  useEffect(() => {
    update()
  }, [initial, isLoading, error, update])

  return (
    <Card classname='col-span-full lg:col-span-3 h-min flex flex-col gap-8'>
      {currentDemographic && categories && currentMetrics && (
        <CardHeader
          title='Inclusion of new hires'
          currentMetrics={currentMetrics}
          dropdown={{
            options: categories,
            onSelect: (value) => update(value),
            selected: currentDemographic,
          }}
        />
      )}
      {currentData && <InclusionOfNewHiresChart currentData={currentData} />}
    </Card>
  )
}

export default InclusionOfNewHires
