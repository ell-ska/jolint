'use client'

import { useState } from 'react'

import FormContent from '@/app/consent-form/_components/form/FormContent'
import InputField from '@/app/consent-form/_components/InputField'
import type { HtmlInputField } from '@/utils/types'

type FormSignProps = {
  title: string
  content: string[]
}

const FormSign = ({ title, content }: FormSignProps) => {
  const [userInput, setUserInput] = useState({
    name: '',
    date: '',
    signature: '',
  })

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
    {
      htmlFor: 'signature',
      labelValue: 'Signature:',
      type: 'text',
      id: 'signature',
      name: 'signature',
      handleForm: (e) => handleForm(e),
    },
  ]

  const handleForm = (e: any): void => {
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value
    setUserInput((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div>
      <FormContent title={title} content={content} />
      <div className='flex max-w-xs flex-col gap-8 pb-12'>
        {htmlInputFields.map((item) => (
          <InputField key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default FormSign
