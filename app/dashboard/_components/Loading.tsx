import { cn } from '@/utils/classnames'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

type LoadingProps = {
  // height?: number
  // padding?: string
  className: string
}

const Loading = ({ className }: LoadingProps) => {
  return (
    // <SkeletonTheme height='1.75rem'>
    //   <Skeleton className={padding} />
    //   <Skeleton height={height} />
    // </SkeletonTheme>
    <div className={cn('animate-pulse rounded-md bg-neutral-200', className)} />
  )
}

export default Loading
