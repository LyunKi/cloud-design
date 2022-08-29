import { StyleProp, TextStyle } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface BasicTextProps {
  style?: StyleProp<TextStyle>
}

export type TextProps = PropsWithThemeStyle<BasicTextProps>
