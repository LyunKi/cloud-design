import mapValues from 'lodash/mapValues'
import countries from './assets/countries.json'
import { Country } from './types'

export const TOAST_HOST = 'ToastHost'

export const COUNTRIES = mapValues(countries, (country, countryCode) => {
  const { name } = country
  const commonName = name.common
  return {
    ...country,
    countryCode,
    callingCode: `+${country.callingCode[0]}`,
    name: {
      common: commonName,
      zh_CN: (name as any).zho,
      en_US: name.common,
    },
  } as Country
})
