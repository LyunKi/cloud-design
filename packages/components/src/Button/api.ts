import { ReactElement } from 'react'
import { GestureResponderEvent, View } from 'react-native'
import { Themeable, ThemeStyle } from '../common/theme'

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
  /**
   * Enum: 'primary'| 'secondary' | 'info' | 'warning'  | 'success'  | 'error' | 'disabled'
   */
  status?: ButtonStatus
  value?: string
  textTs?: ThemeStyle
  onPress?: (event?: GestureResponderEvent) => any
  renderLeft?: (props?: AccessoryProps) => ReactElement
  renderRight?: (props?: AccessoryProps) => ReactElement
  viewRef?: React.Ref<View>
}

export type ButtonProps = Themeable<BasicButtonProps>
