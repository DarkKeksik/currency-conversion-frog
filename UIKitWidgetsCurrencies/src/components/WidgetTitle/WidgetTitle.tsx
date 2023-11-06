import React, { FC } from 'react'
import * as Styled from './WidgetTitle.styled'

type TWidgetTitle = {
  title: string
}

const WidgetTitle: FC<TWidgetTitle> = ({ title }) => {
  return <Styled.WidgetTitle>{ title }</Styled.WidgetTitle>
}

export default WidgetTitle