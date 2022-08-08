import React, { PropsWithChildren } from 'react'
import { LocaleProvider, LocaleProviderProps } from './locale'
import { ThemeProvider, ThemeProviderProps } from './theme'

export interface ConfigProviderProps
  extends ThemeProviderProps,
    LocaleProviderProps {}

export function ConfigProvider(props: PropsWithChildren<ConfigProviderProps>) {
  const { themePack, locale, children } = props
  return (
    <ThemeProvider themePack={themePack}>
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    </ThemeProvider>
  )
}
