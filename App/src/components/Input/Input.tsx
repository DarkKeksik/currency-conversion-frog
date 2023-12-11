import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { hooksCommon } from '@hooks'

import * as Styled from './Input.styled'

type TInput = {
  afterContent?: string
  isAutoFocus?: boolean
  placeholder?: string
  type?: 'string' | 'number'
  defaultValue?: number
  Icon?: ReactNode
  sideEffects?: (val: string | number) => void
  min?: number
}

const Input: FC<TInput> = ({
  afterContent,
  isAutoFocus,
  placeholder = '',
  type = 'string',
  defaultValue,
  sideEffects,
  min = 1,
  Icon
}) => {
  const [value, setValue] = useState(type === 'number' ? min : '')
  const valueDebounce = hooksCommon.useDebounce(value)

  const getDisplayValue = useCallback(() => {
    if(type === 'string' && String(value).length === 0) {
      return placeholder
    } else if (type === 'number' && value <= 0) {
      return min
    } else {
      return value
    }
  }, [value])

  const onChange = (e): void => {
    const { target: { value: inputVal}} = e
    setValue(inputVal)
  }

  useEffect(() => {
    setValue(defaultValue || placeholder)
  }, [defaultValue, placeholder])

  useEffect(() => {
    if(sideEffects) {
      sideEffects(valueDebounce)
    }
  }, [valueDebounce])

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
        { Icon }
        { getDisplayValue() }
      </Styled.InputVisible>
    </Styled.Wrap>
  )
}

export default Input