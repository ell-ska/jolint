import { Volume2 } from 'lucide-react'

type TitleProps = {
  text?: string
}

const Title: React.FC<TitleProps> = ({ text = 'Default Title' }) => {
  return (
    <h1 className='font-heading inline-flex items-center space-x-4 text-xl font-bold text-neutral-900'>
      <span>{text}</span>
      <Volume2 />
    </h1>
  )
}

export default Title
