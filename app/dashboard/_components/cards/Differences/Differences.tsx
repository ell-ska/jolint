import { useCallback, useEffect, useState } from 'react'

import { useData } from '@/hooks/useData'
import { getCurrentMetrics } from '@/utils/getCurrentMetrics'
import { getUnique } from '@/utils/getUnique'
import Card from '@/components/Card'
import CardHeader from '@/app/dashboard/_components/CardHeader'
import DifferencesGraph from '@/app/dashboard/_components/cards/Differences/DifferencesGraph'
import type { metrics } from '@/utils/types'

const Differences = () => {
  const { data: initial, error, isLoading } = useData('demographic-inclusion')
  const [currentDemographic, setCurrentDemographic] = useState<string | null>(
    null,
  )
  const [categories, setCategories] = useState<string[] | null>(null)
  const [currentMetrics, setCurrentMetrics] = useState<metrics | null>(null)
  const [currentData, setCurrentData] = useState<any[] | null>(null)

  const update = useCallback(
    (demographic?: string) => {
      if (isLoading || error || !initial) return

      const data = initial.demographic_inclusion_metrics

      const currentDemographic = demographic || data[0].demographic_category
      setCurrentDemographic(currentDemographic)

      const currentData = data.filter(
        (data: any) => data.demographic_category === currentDemographic,
      )
      setCurrentData(currentData)

      setCategories(getUnique(data, 'demographic_category'))

      setCurrentMetrics(getCurrentMetrics(currentData, 'demographic_value'))
    },
    [initial, error, isLoading],
  )

  useEffect(() => {
    update()
  }, [initial, error, isLoading, update])

  return (
    <Card classname='col-span-full lg:col-span-3 h-min gap-8 flex flex-col'>
      {currentDemographic && categories && currentMetrics && (
        <CardHeader
          title='Differences'
          currentMetrics={currentMetrics}
          dropdown={{
            options: categories,
            onSelect: (value) => update(value),
            selected: currentDemographic,
          }}
        />
      )}
      {currentData && <DifferencesGraph currentData={currentData}/>}
    </Card>
  )
}

export default Differences
