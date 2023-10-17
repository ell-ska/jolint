type Props = {
  children: JSX.Element[] | JSX.Element
}

const GeneralGridLayout = ({ children }: Props) => {
  return (
    <div className='min-w-screen grid h-full gap-8 bg-[#cadef0] p-4'>
      <div className='min-w-1/2 min-h-40 col-start-1 col-span-4 row-span-1 h-40 rounded-3xl border-solid bg-[#fafafa]'>
        Chart Container (2/3)
      </div>
      <div className='min-w-1/2 min-h-40 col-start-5 col-span-2 row-span-1 h-full rounded-3xl border-solid bg-[#d1d1d1]'>
        Info Container (1/3)
      </div>
      <div className='col-start-1 col-span-3 row-span-2 max-h-full w-full rounded-3xl h-40 border-solid bg-[#9c9c9c]'>
        Container 1 (50%)
      </div>
      <div className='row-span-2 col-start-4 col-span-3 grid h-full w-full rounded-3xl bg-[#414040]'>
        <div>Top</div>
        <div>Bottom</div>
      </div>
      <div className='col-span-2 col-start-1 row-span-3 h-full w-full rounded-3xl border-solid bg-[#3f3f3f]'>
        Container 3 (25%)
      </div>
      <div className='col-start-3 col-span-4 row-span-3 grid h-full w-full grid-cols-2 gap-4 rounded-3xl bg-[#272727]'>
        <div className='rounded-3x min-h-64 rounded-3xl bg-blue-dull'>
          Card 1
        </div>
        <div className='rounded-3x h-32 rounded-3xl bg-blue-light'>Card 2</div>
        <div className='rounded-3x h-32 rounded-3xl bg-blue-dull'>Card 3</div>
        <div className='rounded-3x h-32 rounded-3xl bg-blue-light'>Card 4</div>
        <div className='rounded-3x h-32 rounded-3xl bg-blue-dull'>Card 5</div>
        <div className='rounded-3x h-32 rounded-3xl bg-blue-light'>Card 6</div>
        <div className='rounded-3x h-32 rounded-3xl bg-blue-dull'>Card 7</div>
        <div className='rounded-3x h-32 rounded-3xl bg-blue-light'>Card 8</div>
      </div>
    </div>
  )
}

export default GeneralGridLayout
