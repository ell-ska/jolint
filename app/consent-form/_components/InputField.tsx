import type { InputFieldType } from '@/utils/types'

const InputField = ({
  htmlFor,
  id,
  labelValue,
  name,
  type,
  handleForm,
}: InputFieldType) => {
  return (
    <div className='flex gap-2 border-b'>
      <label htmlFor={htmlFor}>{labelValue}</label>
      <input type={type} id={id} name={name} onChange={handleForm} />
    </div>
  )
}

export default InputField
