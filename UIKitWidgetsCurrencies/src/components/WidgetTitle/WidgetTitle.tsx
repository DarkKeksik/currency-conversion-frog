import React, { FC, PropsWithChildren } from 'react'

import * as Styled from './WidgetTitle.styled'

type TWidgetTitle = {
  title: string
} & PropsWithChildren

const WidgetTitle: FC<TWidgetTitle> = ({ title, children }) => {
  return <Styled.WidgetTitle>{ title || children }</Styled.WidgetTitle>
}

export default WidgetTitle