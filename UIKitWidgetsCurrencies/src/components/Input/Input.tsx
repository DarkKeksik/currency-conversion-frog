import React, { FC, ReactNode, useEffect, useState } from 'react'

import * as Styled from './Input.styled'

type TInput = {
  afterContent?: string
  isAutoFocus?: boolean
  placeholder?: string
  type?: string
  defaultValue?: number
  Icon?: ReactNode
}

const Input: FC<TInput> = ({
  afterContent,
  isAutoFocus,
  placeholder = '',
  type = 'string',
  defaultValue,
  Icon
}) => {
  const [value, setValue] = useState<number | string>('')

  const onChange = (e): void => {
    const { target: { value: inputVal } } = e

    if (inputVal.length === 0) {
      return setValue(defaultValue || placeholder)
    }

    setValue(inputVal)
  }

  useEffect(() => {
    setValue(defaultValue || placeholder)
  }, [defaultValue, placeholder])

  return (
    <Styled.Wrap>
      <Styled.InputHide
        type={type}
        min={1}
        onChange={onChange}
        autoFocus={isAutoFocus}
        afterContent={value === placeholder ? '...' : afterContent}
      />
      <Styled.InputVisible>
        { Icon }{ value }
      </Styled.InputVisible>
    </Styled.Wrap>
  )
}

export default Input