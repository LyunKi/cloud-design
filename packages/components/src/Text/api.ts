import { Size } from '../common/types'
import { Themeable } from '../common/theme'

export interface BasicTextProps {
  value?: string
  size?: Size
  numberOfLines?: number
}

export type TextProps = Themeable<BasicTextProps>
