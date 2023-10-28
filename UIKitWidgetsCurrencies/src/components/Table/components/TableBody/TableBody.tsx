import React, { FC } from 'react'
import * as Styled from './TableBody.styled'

const TableBody: FC<any> = ({ dataItems }) => {
  return (
    <Styled.TableBody>
      {dataItems.map(({name, abbreviation, change, value ,isSelected}) => (
          <Styled.TableItem isActive={isSelected}>
            <Styled.WrapName>
              <Styled.CurrencyName>{name}</Styled.CurrencyName>
              <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
            </Styled.WrapName>
            {isSelected ?
              <Styled.CurrencyValue contentEditable>{value}</Styled.CurrencyValue> :
              <Styled.CurrencyChange>{change}</Styled.CurrencyChange>
            }
          </Styled.TableItem>
        )
      )}
    </Styled.TableBody>
  )
}

export default TableBody