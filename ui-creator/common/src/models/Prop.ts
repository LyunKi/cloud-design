import { Prefix } from '@cloud-dragon/common-types'

export type RemPropValue = Prefix<'$rem'>

export function isRemPropValue(
  propValue: PropValue
): propValue is RemPropValue {
  return typeof propValue === 'string' && propValue.startsWith('$rem')
}

export type PropValue = any | RemPropValue

export interface Prop {
  name: string
  value: PropValue
  valueType?: 'object'
}
