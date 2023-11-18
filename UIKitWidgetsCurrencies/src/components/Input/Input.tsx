import React, { FC, useState } from 'react'

import * as Styled from './Input.styled'

type TInput = {
  afterContent?: string
  isAutoFocus?: boolean
  placeholder?: string
  type?: string
}

const Input: FC<TInput> = ({
  afterContent,
  isAutoFocus,
  placeholder = '',
  type = 'string'
}) => {
  const [value, setValue] = useState(placeholder)

  const onChange = (e): void => {
    const { target: { value: inputVal } } = e
    if (!inputVal.length) {
      return setValue(placeholder)
    }

    setValue(inputVal)
  }

  return (
    <Styled.Wrap>
      <Styled.InputHide
        type={type}
        onChange={onChange}
        autoFocus={isAutoFocus}
        afterContent={value === placeholder ? '...' : afterContent}
      />
      <Styled.InputVisible>
        {value}
      </Styled.InputVisible>
    </Styled.Wrap>
  )
}

export default Input