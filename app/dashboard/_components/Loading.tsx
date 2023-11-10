import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type LoadingProps = {
  height: number
  padding?: string
}

const Loading = ({height, padding}: LoadingProps) => {
  return (
    <SkeletonTheme height='28px'>
      <Skeleton className={padding} />
      <Skeleton height={height}/>
    </SkeletonTheme>
  )
}

export default Loading
