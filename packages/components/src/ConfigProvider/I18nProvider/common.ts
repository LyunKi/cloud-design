export type SupportedLocale = 'zh-CN' | 'en-US'

class I18nManagerClass {
  public locale: SupportedLocale = 'en-US'

  public setLocale(locale: SupportedLocale) {
    this.locale = locale
  }
}

export const I18nManager = new I18nManagerClass()
