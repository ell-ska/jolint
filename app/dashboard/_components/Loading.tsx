import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type LoadingProps = {
  height?: number
  padding?: string
}

const Loading = ({ height = 230, padding }: LoadingProps) => {
  return (
    <SkeletonTheme height='1.75rem'>
      <Skeleton className={padding} />
      <Skeleton height={height} />
    </SkeletonTheme>
  )
}

export default Loading
