import styled, {css} from "styled-components"

export const TableBody = styled.div`
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
  font-weight: 700;
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

export const TableItem = styled.div<{ isActive?: boolean }>`
  gap: 10px;
  padding: 1em 1.5em;
  transition-duration: .3s;

  ${(props) => props.isActive ? (
          css`
      display: flex;
      justify-content: space-between;
      background: #26ad8d;
    `) : (
          css `
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        cursor: pointer;
        
        &:hover {
          background-color: #2b4a51;
        }
    `)
  }
`