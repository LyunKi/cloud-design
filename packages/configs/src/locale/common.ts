import { createContext, useContext } from 'react'

export type SupportedLocale = 'zh-CN' | 'en-US'

export const LocaleContext = createContext<SupportedLocale>('zh-CN')

export function useLocale() {
  return useContext(LocaleContext)
}
