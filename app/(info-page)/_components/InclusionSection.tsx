const InclusionSection = () => {
  const inclusionData = [
    { label: 'Less isolation', percentage: '31%' },
    { label: 'Lower sick leave', percentage: '41%' },
    { label: 'Lower staff turnover', percentage: '59%' },
    { label: 'More satisfied employees', percentage: '61%' },
  ]

  return (
    <div className='mt-28 md:mt-20'>
      <h2 className='text-center font-heading text-2xl font-bold md:text-3xl'>
        Inclusion makes a difference
      </h2>
      <p className='mt-4 text-center font-body text-base md:text-xl'>
        Organizations with higher inclusion among coworkers have, according to
        [source].
      </p>
      <div className='mt-10 flex flex-col items-center gap-8 md:flex-row md:justify-between'>
        {inclusionData.map((item) => (
          <div key={item.label} className='flex grow flex-col items-center'>
            <p className='text-3xl font-bold text-blue-bright md:text-4xl'>
              {item.percentage}
            </p>
            <h3 className='mt-2 text-center text-lg md:text-xl'>
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InclusionSection
