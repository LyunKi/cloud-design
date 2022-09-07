import React, { PropsWithChildren } from 'react'
import { I18nProvider, I18nProviderProps } from './I18nProvider'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'

export * from './I18nProvider'
export * from './ThemeProvider'

export interface ConfigProviderProps
  extends ThemeProviderProps,
    I18nProviderProps {}

export function ConfigProvider(props: PropsWithChildren<ConfigProviderProps>) {
  const { themePack, themeConfig, locale, children } = props
  return (
    <ThemeProvider themePack={themePack} themeConfig={themeConfig}>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </ThemeProvider>
  )
}
