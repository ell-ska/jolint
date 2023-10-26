import Accordion from '@/components/Accordion'

const Playground = () => {
  return (
    <div className='p-8'>
      <Accordion
        className='max-w-xs space-y-4 rounded-2xl bg-neutral-200 p-4'
        trigger={<h3 className='text-xl font-bold'>hej hej</h3>}
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt
            deleniti nobis debitis nulla mollitia vero voluptates possimus,
            sequi facilis.
          </p>
        }
        icon
      />
    </div>
  )
}

export default Playground
