import React, { FC } from 'react'

import * as Styled from './TableBody.styled'
import TablePanel from '../TablePanel/TablePanel'

// @TODO Extract by components
const TableBody: FC<any> = ({ dataItems, rowsMax }) => {
  return (
    <Styled.TableBody>
      {dataItems.map(({name, abbreviation, value, isSelected}) =>
        isSelected ? (
          <Styled.ItemSelected>
            <Styled.WrapName>
              <Styled.CurrencyName>{name}</Styled.CurrencyName>
              <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
            </Styled.WrapName>
            <Styled.CurrencyValue contentEditable>{value}</Styled.CurrencyValue>
          </Styled.ItemSelected>
        ) : (
          <Styled.Item>
            <Styled.WrapName>
              <Styled.CurrencyName>{name}</Styled.CurrencyName>
              <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
            </Styled.WrapName>
          </Styled.Item>
        )
      )}

      {dataItems.length > rowsMax && <TablePanel />}
    </Styled.TableBody>
  )
}

export default TableBody