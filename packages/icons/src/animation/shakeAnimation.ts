import { Animated, Easing, Platform, ViewProps } from 'react-native'
import { Animation, AnimationConfig } from './animation'

const DEFAULT_CONFIG: ShakeAnimationConfig = {
  start: 0.0,
  offset: 2.5,
  easing: Easing.linear,
  duration: 25,
  cycles: 8,
  useNativeDriver: Platform.OS !== 'web',
}

type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>

export interface ShakeAnimationConfig
  extends AnimationConfig,
    TimingAnimationConfig {
  start: number
  offset: number
}

export class ShakeAnimation extends Animation<ShakeAnimationConfig, ViewProps> {
  private value: Animated.Value

  protected get animation(): Animated.CompositeAnimation {
    const { start, offset, ...restConfig } = this.config

    const startAnimation: Animated.CompositeAnimation = Animated.timing(
      this.value,
      {
        toValue: this.counter % 2 !== 0 ? -offset : offset,
        ...restConfig,
      }
    )

    const endAnimation: Animated.CompositeAnimation = Animated.timing(
      this.value,
      {
        toValue: this.counter % 2 !== 0 ? offset : -offset,
        ...restConfig,
      }
    )

    return Animated.sequence([startAnimation, endAnimation])
  }

  constructor(config?: Partial<ShakeAnimationConfig>) {
    super({ ...DEFAULT_CONFIG, ...config })
    this.value = new Animated.Value(this.config.start)
  }

  public toProps(): ViewProps {
    return {
      style: {
        transform: [{ translateX: this.value as unknown as number }],
      },
    }
  }
}
