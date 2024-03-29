import { KV } from '@cloud-dragon/common-types'
import countries from './assets/countries.json'

export type CountryCode = keyof typeof countries

export type SupportedLocale = 'zh_CN' | 'en_US'

export type Country = {
  countryCode: CountryCode
  callingCode: string
  flag: string
  name: {
    common: string
    zh_CN: string
    en_US: string
  }
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Status = 'success' | 'error' | 'warning' | 'info'

export interface MaskProps {
  ts?: KV
  disableCloseOnPress?: boolean
}

