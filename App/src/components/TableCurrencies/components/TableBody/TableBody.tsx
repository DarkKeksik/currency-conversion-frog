import React, { FC, useEffect, useState } from 'react'

import { Input, Preloader } from '../../../'
import * as Styled from './TableBody.styled'

const TableBody: FC<any> = ({
  handler,
  dataItems = [],
  rowsMax,
  multiSelect,
  hideInput,
  isSelectedDefault
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedIds, setSelectedIds] = useState<Array<number>>([])
  const [isClicked, setIsClicked] = useState(false)

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
    if(multiSelect) {
      if (selectedIds.includes(id)) {
        const clearedArr = selectedIds.filter((itemId) => !(itemId === id))
        return setSelectedIds(clearedArr)
      }
      setIsClicked(true)
      return setSelectedIds([...selectedIds, id])
    }

    setIsClicked(true)
    setSelectedId(id)
  }

  useEffect(() => {
    if (handler && isClicked) {
      handler(Boolean(selectedId || selectedIds.length))
    }
  }, [selectedId, selectedIds, isClicked])

  if(!dataItems.length) {
    return (
      <Styled.TableBody>
        <Preloader />
      </Styled.TableBody>
    )
  }

  return (
    <Styled.TableBody>
      {dataItems.map(({baseAsset, name, value, isSelected}, id) => {
          if (isSelectedItem(id)) {
            return (
              <Styled.ItemSelected onClick={() => onClickItem(id)} key={id}>
                <Styled.WrapName>
                  {(name || baseAsset) && <Styled.CurrencyName>{ name || baseAsset }</Styled.CurrencyName>}
                  {baseAsset && <Styled.CurrencyAbbreviation>{ baseAsset }</Styled.CurrencyAbbreviation>}
                </Styled.WrapName>

                {hideInput ?
                  <Styled.CurrencyValue>
                    {(Math.random() * 10).toFixed(6)}
                  </Styled.CurrencyValue>:
                  <Input
                    isAutoFocus
                    defaultValue={1}
                    placeholder='Enter a value'
                    type='number'
                    afterContent={baseAsset}
                  />
                }
              </Styled.ItemSelected>
            )
          }

          return (
            <Styled.Item onClick={() => onClickItem(id)} key={id}>
              <Styled.WrapName>
                {(name || baseAsset) && <Styled.CurrencyName>{ name || baseAsset }</Styled.CurrencyName>}
                {baseAsset && <Styled.CurrencyAbbreviation>{ baseAsset }</Styled.CurrencyAbbreviation>}
              </Styled.WrapName>
            </Styled.Item>
          )
        })}
    </Styled.TableBody>
  )
}

export default TableBody