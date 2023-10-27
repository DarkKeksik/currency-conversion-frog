import React, {FC} from 'react'
import * as Styled from './CurrenciesCrypto.styled'

const CurrenciesCrypto: FC = ({ currenciesListCrypto, currenciesListStable }) => {

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Wrap>
        <Styled.TableCurrencySelectable>
          <Styled.TableHead>
            <Styled.TableHeadTitle>From</Styled.TableHeadTitle>
            <Styled.CurrencySearch>Search...</Styled.CurrencySearch>
          </Styled.TableHead>
          <Styled.TableBody>
            {currenciesListCrypto.map(({name, abbreviation, change, value ,isSelected}) => {
              return (
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
            })}
          </Styled.TableBody>
        </Styled.TableCurrencySelectable>

        <Styled.TableCurrencySelected>
          <Styled.TableHead>
            <Styled.TableHeadTitle>To</Styled.TableHeadTitle>
            <Styled.CurrencySearch />
          </Styled.TableHead>
          <Styled.TableBody>
            {currenciesListStable.map(({name, abbreviation, price}) => {
              return (
                <Styled.TableItem>
                  <Styled.WrapName>
                    <Styled.CurrencyName>{name}</Styled.CurrencyName>
                    <Styled.CurrencyAbbreviation>{abbreviation}</Styled.CurrencyAbbreviation>
                  </Styled.WrapName>
                    <Styled.CurrencyValue>{price}</Styled.CurrencyValue>
                </Styled.TableItem>
              )
            })}
          </Styled.TableBody>
        </Styled.TableCurrencySelected>
      </Styled.Wrap>
    </>
  )
}

export default CurrenciesCrypto