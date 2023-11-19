import React, {FC, useEffect, useState} from 'react'

import { Input } from '../../../'
import TablePanel from '../TablePanel/TablePanel'
import * as Styled from './TableBody.styled'

const TableBody: FC<any> = ({
  callback,
  dataItems,
  rowsMax,
  multiSelect,
  hideInput,
  isSelectedDefault
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedIds, setSelectedIds] = useState<Array<number>>([])

  const isSelectedItem = (id): boolean => {
    if(multiSelect) {
      return selectedIds.includes(id)
    }
    return id === selectedId
  }

  useEffect(() => {
    if(isSelectedDefault) {
      return setSelectedId(0)
    }

    setSelectedId(null)
    setSelectedIds([])
  }, [dataItems])

  const onClickItem = (id): void => {
    if (callback) {
      callback()
    }

    if(multiSelect) {
      if (selectedIds.includes(id)) {
        const clearedArr = selectedIds.filter((itemId) => !(itemId === id))
        return setSelectedIds(clearedArr)
      }
      return setSelectedIds([...selectedIds, id])
    }

    setSelectedId(id)
  }

  return (
    <Styled.TableBody>
      {dataItems.map(({name, abbreviation, value, isSelected}, id) => {
        if (isSelectedItem(id)) {
          return (
            <Styled.ItemSelected onClick={() => onClickItem(id)} key={id}>
              <Styled.WrapName>
                <Styled.CurrencyName>{name}</Styled.CurrencyName>
                <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
              </Styled.WrapName>

              {hideInput ?
                <Styled.CurrencyValue>
                  { (Math.random() * 10).toFixed(6) }
                </Styled.CurrencyValue>:
                <Input
                  isAutoFocus
                  defaultValue={1}
                  placeholder='Enter a value'
                  type='number'
                  afterContent={abbreviation}
                />
              }

            </Styled.ItemSelected>
          )
        }

        return (
          <Styled.Item onClick={() => onClickItem(id)} key={id}>
            <Styled.WrapName>
              <Styled.CurrencyName>{name}</Styled.CurrencyName>
              <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
            </Styled.WrapName>
          </Styled.Item>
        )
      })}

      {dataItems.length > rowsMax && <TablePanel />}
    </Styled.TableBody>
  )
}

export default TableBody