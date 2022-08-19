import React, { Ref } from 'react'
import { Animated } from 'react-native'
import { AnimationConfig } from './animation/animation'
import {
  getIconAnimation,
  SupportedAnimation,
} from './animation/animationRegistry'
import { findIconByName } from './generated'

export type IconAnimationProp = {
  type: SupportedAnimation
  config?: AnimationConfig
}

export interface IconProps {
  name: string
  size?: number
  color?: string
  animation?: IconAnimationProp
}

export interface IconRef {
  startAnimation?: Function
  stopAnimation?: Function
}

function Icon(props: IconProps, ref: Ref<IconRef>) {
  const { name, size = 24, color, animation } = props
  const Icon = findIconByName(name)!
  const animationInstance = React.useMemo(() => {
    if (!animation) {
      return
    }
    const { type, config } = animation
    return getIconAnimation(type, config)
  }, [animation])
  React.useImperativeHandle(ref, () => {
    return {
      startAnimation: animationInstance?.start,
      stopAnimation: animationInstance?.stop,
    }
  })
  return (
    <Animated.View {...animationInstance?.toProps}>
      {React.createElement(Icon, {
        width: size,
        height: size,
        fill: color,
      })}
    </Animated.View>
  )
}

export default React.forwardRef(Icon)