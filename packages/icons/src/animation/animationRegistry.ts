import { ViewStyle } from 'react-native'
import { Animation, AnimationConfig } from './animation'
import { ZoomAnimation } from './zoomAnimation'
import { PulseAnimation } from './pulseAnimation'
import { ShakeAnimation } from './shakeAnimation'

export type IconAnimation = Animation<AnimationConfig, ViewStyle>

export interface IconAnimationRegistry {
  zoom: IconAnimation
  pulse: IconAnimation
  shake: IconAnimation
}

export function getIconAnimation(
  animation?: keyof IconAnimationRegistry,
  config?: AnimationConfig
): IconAnimation | undefined {
  switch (animation) {
    case 'zoom':
      return new ZoomAnimation(config)
    case 'pulse':
      return new PulseAnimation(config)
    case 'shake':
      return new ShakeAnimation(config)
  }
}
