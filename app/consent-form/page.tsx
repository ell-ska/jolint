import Chapter from '@/app/consent-form/_components/chapter/Chapter'

const ConsentForm = () => {
  return (
    <main className='px-20'>
      <div className='relative flex gap-8'>
        <Chapter
          title='Introduction'
          desc='Let Jolint introduce themselves to you'
          icon='introduction'
          state='unlocked'
        />
        <Chapter
          title='Purpose'
          desc='The purpose of having Jolint in your company'
          icon='purpose'
          state='locked'
        />
        <Chapter
          title='Your rights'
          desc='Your rights with the processing of your personal data'
          icon='rights'
          state='locked'
        />
        <Chapter
          title='Consent'
          desc='Sign in to improve inclusion and belonging in your company'
          icon='consent'
          state='locked'
        />
        <span className='absolute -bottom-8 right-0'>0/4</span>
      </div>
    </main>
  )
}

export default ConsentForm
