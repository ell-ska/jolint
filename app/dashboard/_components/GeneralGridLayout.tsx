type Props = {
  children?: React.ReactNode
}

const GeneralGridLayout = ({ children }: Props) => {
  return (
    <div className='grid min-h-screen grow auto-rows-min grid-cols-6 gap-4 bg-neutral-300 p-4 lg:gap-8 lg:p-8'>
      {children}
    </div>
  )
}

export default GeneralGridLayout
