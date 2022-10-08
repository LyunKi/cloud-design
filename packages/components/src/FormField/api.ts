import { Fn } from '@cloud-dragon/common-types'
import { ReactElement } from 'react'
import { Themeable } from '../common'

export interface FieldProps {
  value?: any
  onBlur: Fn
  error?: boolean
  onChange: Fn
}

export interface BasicFormFieldProps {
  name: string
  renderField: (props?: FieldProps) => ReactElement
  label?: string
  tip?: string
  isRequired?: boolean
  /**
   * These props will be auto computed if wrapped by `Form` component
   */
  error?: string
}

export type FormFieldProps = Themeable<BasicFormFieldProps>
