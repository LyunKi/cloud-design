import { ReactElement } from 'react'
import { TextInputProps } from 'react-native'
import { AccessoryProps, Themeable, ThemeStyle } from '../common'

export interface SearchFormat {
  type: 'search'
  onSearch: (value?: string) => any
}

export interface PasswordFormat {
  type: 'password'
}

export type InputFormat = SearchFormat | PasswordFormat

export interface BasicInputProps
  extends Omit<TextInputProps, 'multiline' | 'secureTextEntry'> {
  error?: boolean
  placeholder?: string
  value?: string
  inputTs?: ThemeStyle
  renderLeft?: (props: AccessoryProps) => ReactElement
  renderRight?: (props: AccessoryProps) => ReactElement
  format?: InputFormat
}

export type InputProps = Themeable<BasicInputProps>
