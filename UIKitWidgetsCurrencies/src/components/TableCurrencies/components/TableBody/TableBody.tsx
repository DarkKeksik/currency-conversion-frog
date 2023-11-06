import React, { FC } from 'react'

import * as Styled from './TableBody.styled'
import TablePanel from '../TablePanel/TablePanel'

const TableBody: FC<any> = ({ dataItems, rowsMax }) => {
  return (
    <Styled.TableBody>
      {dataItems.map(({name, abbreviation, value, isSelected}) => (
          <Styled.TableItem isActive={isSelected}>
            <Styled.WrapName>
              <Styled.CurrencyName>{name}</Styled.CurrencyName>
              <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
            </Styled.WrapName>
            {isSelected &&
              <Styled.CurrencyValue contentEditable>{value}</Styled.CurrencyValue>
            }
          </Styled.TableItem>
        )
      )}
      {dataItems.length >= rowsMax && <TablePanel />}
    </Styled.TableBody>
  )
}

export default TableBody