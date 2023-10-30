type Props = {
  children?: React.ReactNode
}

const GeneralGridLayout = ({ children }: Props) => {
  return (
    <div className='grid min-h-screen w-full grow grid-cols-6 gap-8 bg-neutral-300 p-4 md:p-8'>
      {children}
    </div>
  )
}

export default GeneralGridLayout
