import styled, { keyframes } from 'styled-components'

const animationBlink = keyframes`
  from { color: white }
  to { color: #ffffff00 }
`

export const Wrap = styled.label`
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const InputVisible = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 .5rem;
  color: #d1d6dd;
  font-size: 13px;
  transition-duration: .3s;
  
  &:hover {
    background: #2b3947;
  }
`

export const InputHide = styled.input<{afterContent: string}>`
  position: absolute;
  top: 0;
  height: 0;
  outline: none;
  border: 0;
  
  &:focus + ${ InputVisible } {
    background: #2b3947;
    box-shadow: inset 0 0 4px #1d2634;
  }

  &:focus + ${ InputVisible }:after {
    content: '${({afterContent}) => afterContent || '...'}';
    margin-left: 4px;
    animation: .8s infinite alternate-reverse ${ animationBlink };
  }
`