import React, { PropsWithChildren } from 'react'
import { LocaleContext, SupportedLocale } from './common'

export interface LocaleProviderProps {
  locale?: SupportedLocale
}

export function LocaleProvider(props: PropsWithChildren<LocaleProviderProps>) {
  const { children, locale = 'zh-CN' } = props
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}
