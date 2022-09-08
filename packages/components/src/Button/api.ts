import { StyleProp } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface BasicButtonProps {
  style?: StyleProp<any>
  value?: string
}

export type ButtonProps = PropsWithThemeStyle<BasicButtonProps>
