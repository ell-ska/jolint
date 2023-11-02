import { cn } from '@/utils/classnames'

type CardProps = {
  classname?: string
  children: React.ReactNode
}

const Card = ({ classname, children }: CardProps) => {
  return (
    <div className={cn('rounded-[2rem] bg-neutral-100 p-8', classname)}>
      {children}
    </div>
  )
}

export default Card
