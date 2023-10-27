import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`

export const Wrap = styled.div`
  display: flex;
  gap: 1em;
  padding: 1em;
  background: #232a37;
`

export const TableCurrencySelectable = styled.div`
  width: 100%;
  box-shadow: 0 -5px 8px -6px #0000009e;
  border-radius: 0.375em;
  overflow: hidden;
`

export const TableCurrencySelected = styled.div`
  width: 100%;
  border-radius: 0.375em;
  overflow: hidden;
`

export const TableHead = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: 1em;
  font-size: 14px;
  background: #1d2634;
`

export const TableBody = styled.div`
  background: #2b3947;
`

export const TableHeadTitle = styled.p`
  font-weight: 700;
  color: #d1d6dd;
`

export const CurrencySearch = styled.p`
  color: #566373;
`

export const TableItem = styled.div<{ isActive: boolean }>`
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