type TimelineProps = {
  itemHeight: number
  firstItem?: boolean
  lastItem?: boolean
}

const Timeline = ({ itemHeight, firstItem, lastItem }: TimelineProps) => {
  const halfDotAndGap = 20
  const distansFromMiddle = `calc(50% + ${halfDotAndGap}px)`
  const height = itemHeight / 2 - halfDotAndGap
  const heightAndGapAndRounded = height + 112 + 2

  return (
    <>
      {!firstItem && (
        <div
          style={{ height, bottom: distansFromMiddle }}
          className='absolute left-1/2 hidden w-[2px] -translate-x-1/2 rounded-sm bg-blue-bright md:block'
        />
      )}
      {!lastItem && (
        <div
          style={{ height: heightAndGapAndRounded, top: distansFromMiddle }}
          className='absolute left-1/2 hidden w-[2px] -translate-x-1/2 rounded-sm bg-blue-bright md:block'
        />
      )}
    </>
  )
}

export default Timeline
