'use client'

import Dropdown from './Dropdown'

// TESTING CODE
//-------------------
const dropDownTestingProps: DroptType = {
  options: ['one', 'two', 'three'],
  onSelect: () => onSelectTestFunction,
}

const onSelectTestFunction = (option: string) => {
  console.log({ option })
}

type DroptType = {
  options: string[]
  onSelect: (value: string) => void
}
//-------------------

type CardHeaderProps = {
  title: string
  currentData?: any
}

const CardHeader = () => {
  return <div></div>
}

export default CardHeader
