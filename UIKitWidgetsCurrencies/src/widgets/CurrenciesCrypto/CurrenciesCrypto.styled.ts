import styled, { keyframes } from 'styled-components'

const animationBottomTop = keyframes`
  0% { transform: translateY(-100%) }
  1000% { transform: translateY(0) }
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #232a37;
`

export const WrapTables = styled.div`
  display: flex;
  gap: 5px;
`

// @TODO 60px from table header need fix
export const ButtonChangeTable = styled.a`
  display: flex;
  margin-top: 60px;
  align-self: center;
  border: 1px solid #2b3947;
  border-radius: 5px;
  padding: 2px;
  box-shadow: -15px 0 10px inset #2b4a51;
  cursor: pointer;
  transition-duration: .3s;
  
  &:hover {
    box-shadow: 15px 0 10px inset #2b4a51;
  }
`

export const AnimationWrap = styled.div`
  overflow: hidden;
`

export const AnimationBottomTop = styled.div`
  animation: 1.5s ${ animationBottomTop };
`