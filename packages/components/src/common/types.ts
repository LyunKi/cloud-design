import countries from './assets/countries.json'
export type CountryCode = keyof typeof countries

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
