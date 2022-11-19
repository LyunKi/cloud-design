import { COUNTRIES } from '../constants'
import { CountryCode, SupportedLocale } from '../types'

class I18nManagerClass {
  public locale: SupportedLocale = 'en_US'

  public setLocale(locale: SupportedLocale) {
    this.locale = locale
  }

  public isValidCountryCode(code?: string | null): code is CountryCode {
    return !!(code && COUNTRIES[code as CountryCode] !== undefined)
  }

  public getCountryByCode(code: CountryCode) {
    return COUNTRIES[code]
  }
}

export const I18nManager = new I18nManagerClass()
