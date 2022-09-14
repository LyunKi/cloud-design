import React, { PropsWithChildren, useEffect } from 'react'
import { SupportedLocale, I18nManager } from './common'

export interface I18nProviderProps {
  locale?: SupportedLocale
}

export function I18nProvider(props: PropsWithChildren<I18nProviderProps>) {
  const { children, locale = 'zh-CN' } = props
  const [ready, setReady] = React.useState(false)
  useEffect(() => {
    I18nManager.setLocale(locale)
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [locale])
  return <>{ready && children}</>
}
