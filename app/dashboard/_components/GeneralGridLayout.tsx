type Props = {
  children?: React.ReactNode
}

const GeneralGridLayout = ({ children }: Props) => {
  return (
    <div className='bg-neutural-300 grid min-h-screen w-full grid-cols-6 gap-8'>
      {children}
    </div>
  )
}

export default GeneralGridLayout
