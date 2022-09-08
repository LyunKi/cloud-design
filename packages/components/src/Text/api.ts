import { StyleProp, TextStyle } from 'react-native'
import { Size } from '../common/types'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface BasicTextProps {
  value?: string
  size?: Size
  numberOfLines?: number
}

export type TextProps = PropsWithThemeStyle<BasicTextProps>
