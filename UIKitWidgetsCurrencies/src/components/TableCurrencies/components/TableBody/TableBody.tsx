import React, { FC, useState } from 'react'

import * as Styled from './TableBody.styled'
import TablePanel from '../TablePanel/TablePanel'

// @TODO Need fix for onClick and logic
const TableBody: FC<any> = ({ dataItems, rowsMax }) => {
  const [itemsList, setItemsList] = useState(dataItems.map((item) => (
    { ...item, isSelected: false }
  )))

  return (
    <Styled.TableBody>
      {itemsList.map(({name, abbreviation, value, isSelected}, id) =>
        isSelected ? (
          <Styled.ItemSelected onClick={() => setItemsList(
            itemsList.map((item, idSelected) => (
              id === idSelected ? {...item, isSelected: false} : {...item}
            ))
          )} key={id}>
            <Styled.WrapName>
              <Styled.CurrencyName>{name}</Styled.CurrencyName>
              <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
            </Styled.WrapName>
            <Styled.CurrencyValue contentEditable>{value}</Styled.CurrencyValue>
          </Styled.ItemSelected>
        ) : (
          <Styled.Item onClick={() => setItemsList(
            itemsList.map((item, idSelected) => (
              id === idSelected ?
                {...item, isSelected: true }:
                {...item, isSelected: false}
            ))
          )} key={id}>
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