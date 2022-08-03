import { Animated, Easing, Platform, ViewProps } from 'react-native'
import { Animation, AnimationConfig } from './animation'

const DEFAULT_CONFIG: ZoomAnimationConfig = {
  start: 1.0,
  end: 0.5,
  easing: Easing.linear,
  duration: 500,
  useNativeDriver: Platform.OS !== 'web',
}

type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>

export interface ZoomAnimationConfig
  extends AnimationConfig,
    TimingAnimationConfig {
  start: number
  end: number
}

export class ZoomAnimation extends Animation<ZoomAnimationConfig, ViewProps> {
  private value: Animated.Value

  protected get animation(): Animated.CompositeAnimation {
    const { start, end, ...restConfig } = this.config

    const startAnimation: Animated.CompositeAnimation = Animated.timing(
      this.value,
      {
        toValue: end,
        ...restConfig,
      }
    )

    const endAnimation: Animated.CompositeAnimation = Animated.timing(
      this.value,
      {
        toValue: start,
        ...restConfig,
      }
    )

    return Animated.sequence([startAnimation, endAnimation])
  }

  constructor(config?: Partial<ZoomAnimationConfig>) {
    super({ ...DEFAULT_CONFIG, ...config })
    this.value = new Animated.Value(this.config.start)
  }

  public toProps(): ViewProps {
    return {
      style: {
        transform: [{ scale: this.value as unknown as number }],
      },
    }
  }
}
