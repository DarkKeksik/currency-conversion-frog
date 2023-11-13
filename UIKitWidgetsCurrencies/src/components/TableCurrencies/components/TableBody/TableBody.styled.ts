import styled from "styled-components"

export const TableBody = styled.div`
  letter-spacing: 1px;
  background: #2b3947;
`

export const WrapName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const CurrencyName = styled.span`
  font-size: 14px;
  color: #d1d6dd;
`

export const CurrencyAbbreviation = styled.span`
  font-size: 12px;
  color: #566373;
`

export const CurrencyChange = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #479c83;
`

export const CurrencyValue = styled.span`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  color: #d1d6dd;
`

export const Item = styled.div`
  padding: 1em 1.8em;
  cursor: pointer;
  transition-duration: .3s;

  &:hover {
    background-color: #2b4a51;
  }
`

export const ItemSelected = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 1em 1.8em;
  box-shadow: 0 3px 4px #1d2634;
  background: #26ad8d;
  
  // @TODO have to fix build styled-components 
  ${ WrapName } {
    border-right: 2px solid #2b3947;
  }
`