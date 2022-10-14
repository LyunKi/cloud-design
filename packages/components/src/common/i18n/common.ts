import countries from '../assets/countries.json'
import { COUNTRIES } from '../constants'
export type SupportedLocale = 'zh_CN' | 'en_US'

export type CountryCode = keyof typeof countries

class I18nManagerClass {
  public locale: SupportedLocale = 'zh_CN'

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
