import React, { Fragment, PropsWithChildren, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GlobalContext } from '../common/context'
import { I18nManager, SupportedLocale } from '../common/i18n'
import { ThemeContext, ThemeManager, ThemePack } from '../common/theme'
export interface ThemeConfig {
  themePack?: ThemePack
  themeMode: string
  themeContext?: Partial<Omit<ThemeContext, 'windowWidth' | 'windowHeight'>>
}

export interface I18nConfig {
  locale?: SupportedLocale
}

export interface GlobalProviderProps extends ThemeConfig, I18nConfig {}

export function GlobalProvider(props: PropsWithChildren<GlobalProviderProps>) {
  const {
    themePack,
    themeMode = 'light',
    themeContext,
    locale = 'zh_CN',
    children,
  } = props
  const [ready, setReady] = React.useState<boolean>(false)
  const [key, setKey] = React.useState<number>(0)
  useEffect(() => {
    const window = Dimensions.get('window')
    ThemeManager.setMode(themeMode)
    ThemeManager.setThemeContext({
      ...themeContext,
      windowWidth: window.width,
      windowHeight: window.height,
    })
    if (themePack) {
      ThemeManager.setThemePack(themePack)
    }
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      ThemeManager.updateThemeContext({
        windowWidth: window.width,
        windowHeight: window.height,
      })
      ThemeManager.computeTheme()
      setKey((prev) => prev + 1)
    })
    I18nManager.setLocale(locale)

    ThemeManager.computeTheme()
    setKey((prev) => prev + 1)
    setReady(true)
    return () => {
      setReady(false)
      subscription?.remove()
    }
  }, [locale, themeMode, themePack, themeContext])
  return (
    <GlobalContext.Provider value={ready}>
      <SafeAreaProvider>
        {ready && <Fragment key={key}>{children}</Fragment>}
      </SafeAreaProvider>
    </GlobalContext.Provider>
  )
}
