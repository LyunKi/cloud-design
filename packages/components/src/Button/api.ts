import { ReactElement } from 'react'
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  View,
} from 'react-native'
import { Themeable, ThemeStyle } from '../common/theme'

interface AccessoryProps {
  color: string
  size: number
}

export type ButtonStatus =
  | 'primary'
  | 'normal'
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'disabled'

export interface BasicButtonProps {
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  /**
   * Enum: 'primary'| 'normal' | 'info' | 'warning'  | 'success'  | 'error' | 'disabled'
   */
  status?: ButtonStatus
  value?: string
  textTs?: ThemeStyle
  onPress?: (event?: GestureResponderEvent) => any
  renderLeft?: (props?: AccessoryProps) => ReactElement
  renderRight?: (props?: AccessoryProps) => ReactElement
  onFocus?: (event: NativeSyntheticEvent<TargetedEvent>) => void
  onLongPress?: (event: GestureResponderEvent) => void
  onBlur?: (event: NativeSyntheticEvent<TargetedEvent>) => void
  viewRef?: React.Ref<View>
}

export type ButtonProps = Themeable<BasicButtonProps>
