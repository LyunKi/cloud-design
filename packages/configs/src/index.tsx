import React, { PropsWithChildren } from 'react'
import { I18nProvider, I18nProviderProps } from './i18n'
import { ThemeProvider, ThemeProviderProps } from './theme'

export * from './i18n'
export * from './theme'

export interface ConfigProviderProps
  extends ThemeProviderProps,
    I18nProviderProps {}

export function ConfigProvider(props: PropsWithChildren<ConfigProviderProps>) {
  const { themePack, locale, children } = props
  return (
    <ThemeProvider themePack={themePack}>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </ThemeProvider>
  )
}
