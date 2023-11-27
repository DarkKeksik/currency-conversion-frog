import React, { FC } from 'react'

import * as Styled from './Pagination.styled'

type TTablePanel = {
  totalPages: number
  itemsLength: number
  pageActive: number
  onPagination: (arg: number) => void
  paginationTotal?: number
}

const Pagination: FC<TTablePanel> = ({
  totalPages,
  pageActive = 1,
  onPagination,
  paginationTotal = 3
 }) => {

  const getPagesList = () => {
    switch (pageActive) {
      case 1:
        return [pageActive, pageActive + 1, pageActive + 2]
      case 2:
        return [pageActive, pageActive + 1, pageActive + 2]
      case 3:
        return [pageActive - 1, pageActive, pageActive + 1, pageActive + 2]
      case totalPages - 1:
        return [pageActive - 2, pageActive - 1, pageActive]
      case totalPages - 2:
        return [pageActive - 2, pageActive - 1, pageActive, pageActive + 1]
      case totalPages:
        return [pageActive - 2, pageActive - 1, pageActive]
      default:
        return [pageActive - 2, pageActive - 1, pageActive, pageActive + 1, pageActive + 2]
    }
  }

  return (
    <Styled.Pagination>
      {(pageActive !== 1) &&
        <Styled.Item onClick={() => onPagination(1)}>1</Styled.Item>
      }

      {/*// @TODO need fix for totalPAges < 2 */}
      {totalPages > 2 && (
        <Styled.Items>
          {getPagesList().map((item) => (
            <Styled.Item
              onClick={() => onPagination(item)}
              isActive={item === pageActive}
            >
              { item }
            </Styled.Item>
          ))}
        </Styled.Items>
      )}

      {pageActive !== totalPages &&
        <Styled.Item
          onClick={() => onPagination(totalPages)}
        >
          {totalPages}
        </Styled.Item>
      }
    </Styled.Pagination>
  )
}

export default Pagination