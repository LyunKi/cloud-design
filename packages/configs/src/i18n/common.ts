import { createContext, useContext } from 'react'

export type SupportedLocale = 'zh-CN' | 'en-US'

export const I18nContext = createContext<SupportedLocale>('zh-CN')

export function useLocale() {
  return useContext(I18nContext)
}
