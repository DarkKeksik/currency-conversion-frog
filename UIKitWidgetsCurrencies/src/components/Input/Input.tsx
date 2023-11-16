import React, { FC, useState } from 'react'
import * as Styled from './Input.styled'

const Input: FC = () => {
  const defaultValue = "Enter a value..."
  const [value, setValue] = useState(defaultValue)

  const onChange = (e): void => {
    const { target: { value: inputVal } } = e
    if (!inputVal.length) {
      return setValue(defaultValue)
    }

    setValue(inputVal)
  }

  return (
    <Styled.Wrap>
      <Styled.InputHide type="number" onChange={onChange} />
      <Styled.InputVisible>{value}</Styled.InputVisible>
    </Styled.Wrap>
  )
}

export default Input