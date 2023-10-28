import React, { FC } from 'react'

import { Table } from '../../components'
import * as Styled from './CurrenciesCrypto.styled'

const CurrenciesCrypto: FC<any> = ({ currenciesListCrypto, currenciesListStable }) => {
  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Wrap>
        <Table bodyData={currenciesListCrypto} />
        <Table bodyData={currenciesListStable} />
      </Styled.Wrap>
    </>
  )
}

export default CurrenciesCrypto