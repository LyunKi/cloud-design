import React, { PropsWithChildren } from 'react'
import { I18nContext, SupportedLocale } from './common'

export interface I18nProviderProps {
  locale?: SupportedLocale
}

export function I18nProvider(props: PropsWithChildren<I18nProviderProps>) {
  const { children, locale = 'zh-CN' } = props
  return <I18nContext.Provider value={locale}>{children}</I18nContext.Provider>
}
