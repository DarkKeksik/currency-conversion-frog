import React, { FC, PropsWithChildren } from 'react'

import * as Styled from './AnimationSlideTo.styled'

type TDirections = 'up' | 'down'

type TAnimationSlideTo = {
  duration?: string
  direction?: TDirections
} & PropsWithChildren

const AnimationSlideTo: FC<TAnimationSlideTo> = ({
  children,
  duration,
  direction
}) => {
  return (
    <Styled.Wrap>
      <Styled.AnimationBlock duration={duration} direction={direction}>
        {children}
      </Styled.AnimationBlock>
    </Styled.Wrap>
  )
}

export default AnimationSlideTo