'use client'

import { ChangeEvent, useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import FormContent from '@/app/consent-form/_components/form/FormContent'
import InputField from '@/app/consent-form/_components/InputField'
import type { HtmlInputField } from '@/utils/types'
import { log } from 'console'

type FormSignProps = {
  title: string
  content: string[]
}

type UserInputType = {
  name: string
  date: string
  consent: boolean | string
}

const FormSign = ({ title, content }: FormSignProps) => {
  const [userInput, setUserInput] = useState<UserInputType>({
    name: '',
    date: '',
    consent: false,
  })

  const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
    const key = e.target.name
    const value = e.target.value

    setUserInput((prev) => ({ ...prev, [key]: value }))
  }

  const handleCheckboxChange = (checked: Checkbox.CheckedState): void => {
    setUserInput({ ...userInput, consent: checked })
  }

  const htmlInputFields: HtmlInputField = [
    {
      htmlFor: 'name',
      labelValue: 'Name:',
      type: 'text',
      id: 'name',
      name: 'name',
      handleForm: (e) => handleForm(e),
    },
    {
      htmlFor: 'date',
      labelValue: 'Date:',
      type: 'text',
      id: 'date',
      name: 'date',
      handleForm: (e) => handleForm(e),
    },
  ]

  return (
    <div>
      <FormContent title={title} content={content} />
      <div className='flex max-w-xs flex-col gap-8 pb-12'>
        {htmlInputFields.map((item) => (
          <InputField key={item.id} {...item} />
        ))}

        <div className='flex gap-4'>
          <Checkbox.Root
            className='h-6 w-6 rounded-md border-neutral-400 data-[state=unchecked]:border data-[state=checked]:bg-green'
            id='consent'
            onCheckedChange={(checked) => handleCheckboxChange(checked)}
          >
            <Checkbox.Indicator>
              <Check className='text-neutral-100' />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor='consent'>I agree to the terms and conditions</label>
        </div>
      </div>
    </div>
  )
}

export default FormSign
