type TitleProps = {
  text?: string
}

const Title = ({ text = 'Consent Form for Data Processing' }: TitleProps) => {
  return (
    <div>
      <h1 className='mb-4 font-heading text-2xl font-bold text-neutral-900 md:text-4xl'>
        {text}
      </h1>
    </div>
  )
}

export default Title
