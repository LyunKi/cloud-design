import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  View,
} from 'react-native'
import { AccessoryRenderProp, Status, Themeable, ThemeStyle } from '../common'

export type ButtonStatus = Status | 'primary' | 'normal' | 'disabled'

export interface BasicButtonProps {
  isActive?: boolean
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  /**
   * Enum: 'primary'| 'normal' | 'info' | 'warning'  | 'success'  | 'error' | 'disabled'
   */
  status?: ButtonStatus
  value?: string | AccessoryRenderProp
  textTs?: ThemeStyle
  onPress?: (event?: GestureResponderEvent) => any
  renderLeft?: AccessoryRenderProp
  renderRight?: AccessoryRenderProp
  onFocus?: (event: NativeSyntheticEvent<TargetedEvent>) => void
  onLongPress?: (event: GestureResponderEvent) => void
  onBlur?: (event: NativeSyntheticEvent<TargetedEvent>) => void
  viewRef?: React.Ref<View>
  loading?: boolean
  loadingText?: string
}

export type ButtonProps = Themeable<BasicButtonProps>
