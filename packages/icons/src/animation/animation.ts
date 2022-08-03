import { Animated, Platform } from 'react-native'

/**
 * @property cycles - number of animation cycles. `Infinity` or `-1` for infinite
 */
export interface AnimationConfig extends Animated.AnimationConfig {
  cycles?: number
}

export const DEFAULT_CONFIG: AnimationConfig = {
  cycles: 1,
  useNativeDriver: Platform.OS !== 'web',
}

/**
 * Base animation class. Creates `Animated.Value` and maps it to props
 */
export abstract class Animation<
  TConfig extends AnimationConfig,
  AnimationProps
> {
  protected abstract animation: Animated.CompositeAnimation
  protected counter: number = 0
  protected endCallback?: Animated.EndCallback
  protected running: boolean = false
  protected config: TConfig

  public abstract toProps(): AnimationProps

  constructor(config?: TConfig) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    } as TConfig
  }

  public start = (callback?: Animated.EndCallback) => {
    this.endCallback = callback
    this.running = true

    this.animation.start(this.onAnimationEnd)
  }

  public stop = () => {
    this.running = false

    this.animation.stop()
  }

  public isAnimating(): boolean {
    return this.running
  }

  protected onAnimationEnd = (result: Animated.EndResult): void => {
    this.counter += 1
    if (this.counter === this.config.cycles) {
      this.stop()
    }
    if (this.running) {
      this.start(this.endCallback)
    }
    if (!this.running) {
      this.counter = 0
      this.endCallback && this.endCallback(result)
      this.endCallback = undefined
    }
  }
}
