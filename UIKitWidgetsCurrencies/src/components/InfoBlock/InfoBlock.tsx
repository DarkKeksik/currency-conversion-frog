import React, { FC } from 'react'

import * as Styled from './InfoBlock.styled'

type TInfoBlock = {
  title?: string
  subtitle?: string
  items?: Array<string>
  rateChange?: string
}

const InfoBlock: FC<TInfoBlock> = ({
  title,
  subtitle,
  items,
  rateChange
}) => {
  console.log(title)
  if( !items ) {
    return null
  }

  return (
    <Styled.InfoBlock>
      <Styled.Title>
        { title }
        <Styled.Subtitle>{ subtitle }</Styled.Subtitle>
      </Styled.Title>

      <Styled.Items>
        <Styled.Col>
          {items && items.map((item) => <Styled.Item>{ item }</Styled.Item>)}
        </Styled.Col>

        <Styled.Col>
          <Styled.RateChange isRising>{ rateChange }</Styled.RateChange>
        </Styled.Col>
      </Styled.Items>
    </Styled.InfoBlock>
  )
}

export default InfoBlock