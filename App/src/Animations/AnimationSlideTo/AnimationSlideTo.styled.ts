import styled, { keyframes } from 'styled-components'

const animationBottomTop = keyframes`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`

const animationTopBottom = keyframes`
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`

export const Wrap = styled.div`
  overflow: hidden;
`

// @TODO need logic fot direction
export const AnimationBlock = styled.div<{duration?: string, direction?: string}>`
  animation:
          ${({ duration }) => duration || '1s'}
          ${animationBottomTop};
`