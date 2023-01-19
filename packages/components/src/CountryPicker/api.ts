import { Fn } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'
import { Country, CountryCode } from '../common'

export type CountryCurrentPropKey = Exclude<keyof Country, 'name'>

export interface CountryPickerProps {
  value?: CountryCode
  keyProp?: CountryCurrentPropKey
  onChange?: Fn
  hideFilter?: boolean
  title?: ReactNode
}

export interface CountryItemProps {
  country: Country
  selectedCountry?: Country
  keyProp?: CountryCurrentPropKey
}
