import { KV } from '@cloud-dragon/common-types'
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface BasicButtonProps {
  value?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  colorScheme?: string
  textTs?: KV
  onPress?: (event: GestureResponderEvent) => void
}

export type ButtonProps = PropsWithThemeStyle<BasicButtonProps>
