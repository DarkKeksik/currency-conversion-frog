import styled from 'styled-components'

export const Wrap = styled.label`
  position: relative;
`

export const InputHide = styled.input`
  position: absolute;
  top: 0;
  height: 0;
  border: 0;
`

export const InputVisible = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 .5rem;
  color: #d1d6dd;
  font-size: 14px;
  transition-duration: .3s;
  
  &:hover {
    background: #2b3947;
  }
`