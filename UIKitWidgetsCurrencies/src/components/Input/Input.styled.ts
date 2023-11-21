import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'

const animationBlink = keyframes`
  from { color: ${ colors.white["5"]} }
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
  gap: 5px;
  width: 100%;
  height: 100%;
  padding: 0 .5rem;
  color: ${ colors.white["5"] };
  font-size: 13px;
  transition-duration: .3s;
  cursor: pointer;
  
  &:hover {
    background: ${ colors.blue["15"] };
  }
`

export const InputHide = styled.input<{afterContent: string}>`
  position: absolute;
  top: 0;
  height: 0;
  outline: none;
  border: 0;
  
  &:focus + ${ InputVisible } {
    background: ${ colors.blue["10"] };
    box-shadow: inset 0 0 4px #1d2634;
  }

  &:focus + ${ InputVisible }:after {
    content: '${({afterContent}) => afterContent || '...'}';
    animation: .8s infinite alternate-reverse ${ animationBlink };
  }
`