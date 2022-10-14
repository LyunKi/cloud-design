import { Fn } from '@cloud-dragon/common-types'
import { Country, CountryCode } from '../common'

export type CountryCurrentPropKey = Exclude<keyof Country, 'name'>

export interface CountryPickerProps {
  value?: CountryCode
  keyProp?: CountryCurrentPropKey
  onChange?: Fn
}

export interface CountryItemProps {
  country: Country
  selectedCountry?: Country
  keyProp?: CountryCurrentPropKey
}
