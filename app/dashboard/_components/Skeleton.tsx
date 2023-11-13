import { cn } from '@/utils/classnames'

type SkeletonProps = {
  className: string
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div className={cn('animate-pulse rounded-md bg-neutral-200', className)} />
  )
}

export default Skeleton
