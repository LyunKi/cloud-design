import { Fn, KV } from '@cloud-dragon/common-types'
import { ReactElement } from 'react'
import { Themeable } from '../common'

export interface FieldProps {
  value?: any
  error?: string
  name: string
  onChange?: Fn
}

export interface FormConfig {
  errors?: KV<any>
  handleChange?: Fn
  values?: KV<any>
}

export interface BasicFormFieldProps {
  name: string
  renderField: (props?: FieldProps) => ReactElement
  label?: string
  tip?: string
  isRequired?: boolean
  /**
   * use with formik
   */
  formConfig?: FormConfig
}

export type FormFieldProps = Themeable<BasicFormFieldProps>
