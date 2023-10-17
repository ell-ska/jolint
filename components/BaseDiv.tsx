import { cn } from '@/utils/classnames'

type BaseDivType = {
  classname: string
  children: React.ReactNode
}

const BaseDiv = ({ classname, children }: BaseDivType) => {
  return (
    <div className={cn('rounded-[2rem] bg-neutral-100 p-8', classname)}>
      {children}
    </div>
  )
}

export default BaseDiv
