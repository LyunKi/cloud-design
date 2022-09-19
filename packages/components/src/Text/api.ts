import { Size } from '../common/types'
import { Themeable } from '../common/theme'

export interface BasicTextProps {
  value?: string
  /**
   * Enum: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
   */
  size?: Size
  numberOfLines?: number
}

export type TextProps = Themeable<BasicTextProps>
