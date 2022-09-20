import React, { PropsWithChildren, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { I18nManager, SupportedLocale } from '../common/i18n'
import { ThemeContext, ThemeManager, ThemePack } from '../common/theme'

export interface ThemeConfig {
  themePack?: ThemePack
  themeMode: 'dark' | 'light'
  themeContext?: Partial<Omit<ThemeContext, 'windowWidth' | 'windowHeight'>>
}

export interface I18nConfig {
  locale?: SupportedLocale
}

export interface ConfigProviderProps extends ThemeConfig, I18nConfig {}

export const ConfigContext = React.createContext<any>(false)

export function ConfigProvider(props: PropsWithChildren<ConfigProviderProps>) {
  const {
    themePack,
    themeMode = 'light',
    themeContext,
    locale = 'zh_CN',
    children,
  } = props
  const [ready, setReady] = React.useState<any>(false)
  useEffect(() => {
    const window = Dimensions.get('window')
    ThemeManager.mode = themeMode
    ThemeManager.setThemeContext({
      ...themeContext,
      windowWidth: window.width,
      windowHeight: window.height,
    })
    if (themePack) {
      ThemeManager.setTheme(themePack)
    }
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      ThemeManager.updateThemeContext({
        windowWidth: window.width,
        windowHeight: window.height,
      })
      setReady({})
    })

    I18nManager.setLocale(locale)

    setReady({})
    return () => {
      setReady(false)
      subscription?.remove()
    }
  }, [locale, themePack, themeContext])
  return (
    <ConfigContext.Provider value={ready}>
      {ready && children}
    </ConfigContext.Provider>
  )
}
