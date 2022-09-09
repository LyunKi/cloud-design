import { KV } from '@cloud-dragon/common-types'
import { ReactElement } from 'react'
import { GestureResponderEvent } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

interface AccessoryProps {
  color: string
  size: number
}

export type ButtonStatus =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'disabled'

export interface BasicButtonProps {
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  status?: ButtonStatus
  value?: string
  textTs?: KV
  onPress?: (event?: GestureResponderEvent) => void
  renderLeft?: (props?: AccessoryProps) => ReactElement
  renderRight?: (props?: AccessoryProps) => ReactElement
}

export type ButtonProps = PropsWithThemeStyle<BasicButtonProps>
