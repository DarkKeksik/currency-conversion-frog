import styled from "styled-components"
import { colors } from "../../../../styles";

export const TableBody = styled.div`
  letter-spacing: 1px;
  background: ${ colors.blue["10"] };
`

export const WrapName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const CurrencyName = styled.span`
  font-size: 14px;
  color: ${ colors.white["5"] };
`

export const CurrencyAbbreviation = styled.span`
  font-size: 12px;
  color: ${ colors.white["45"] };
`

export const CurrencyChange = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${ colors.green["10"] };
`

export const CurrencyValue = styled.span`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  color: ${ colors.white["5"] };
`

export const Item = styled.div`
  padding: 1em 1.8em;
  cursor: pointer;
  transition-duration: .3s;

  &:hover {
    background-color: ${ colors.green["5"] };
  }
`

export const ItemSelected = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 1em 1.8em;
  background: ${ colors.green["10"] };
  box-shadow: 0 5px 6px ${ colors.blue["15"] };
  
  ${ WrapName } {
    border-right: 2px solid ${ colors.blue["10"] };
  }
`