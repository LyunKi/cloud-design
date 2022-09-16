import { Size } from '../common/types'
import { PropsWithThemeStyle } from '../common/theme'

export interface BasicTextProps {
  value?: string
  size?: Size
  numberOfLines?: number
}

export type TextProps = PropsWithThemeStyle<BasicTextProps>
