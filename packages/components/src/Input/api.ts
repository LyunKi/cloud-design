import { ReactElement } from 'react'
import { TextInputProps } from 'react-native'
import { AccessoryProps, Themeable, ThemeStyle } from '../common'

export interface BasicInputProps extends Omit<TextInputProps, 'multiline'> {
  placeholder?: string
  value?: string
  inputTs?: ThemeStyle
  renderLeft?: (props?: AccessoryProps) => ReactElement
  renderRight?: (props?: AccessoryProps) => ReactElement
}

export type InputProps = Themeable<BasicInputProps>
