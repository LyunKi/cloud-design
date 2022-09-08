import { KV } from '@cloud-dragon/common-types'
import { StyleProp, ViewStyle } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface BasicButtonProps {
  value?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  colorScheme?: string
  textTs?: KV
}

export type ButtonProps = PropsWithThemeStyle<BasicButtonProps>
