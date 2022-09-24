import { TextInputProps } from 'react-native'
import { Themeable } from '../common'

export interface BasicInputProps extends TextInputProps {
  placeholder?: string
  value?: string
}

export type InputProps = Themeable<BasicInputProps>
