import { Volume2 } from 'lucide-react'

type TitleProps = {
  text?: string
}

const Title = ({ text = 'Default Title' }: TitleProps) => {
  return (
    <div>
      <h1 className='font-heading inline-flex items-center space-x-8 text-4xl font-bold text-neutral-900'>
        {text}
      </h1>
      <Volume2 />
    </div>
  )
}

export default Title
