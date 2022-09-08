import { KV } from '@cloud-dragon/common-types'
import { StyleProp } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface BasicButtonProps {
  style?: StyleProp<any>
  value?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  colorScheme?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  textTs?: KV
}

export type ButtonProps = PropsWithThemeStyle<BasicButtonProps>
