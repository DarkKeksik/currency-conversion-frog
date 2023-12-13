import React, { FC, PropsWithChildren } from 'react'

import * as Styled from './EmptyResult.styled'

type TEmptyResult = {
  text?: string
} & PropsWithChildren

const EmptyResult: FC<TEmptyResult> = ({text, children}) => (
  <Styled.EmptyResult>
    {!!text && text}
    { children }
  </Styled.EmptyResult>
)


export default EmptyResult