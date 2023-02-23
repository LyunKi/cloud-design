import React, { Fragment, PropsWithChildren, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PortalProvider } from '@gorhom/portal'
import {
  SupportedLocale,
  ThemeContext,
  ThemeManager,
  ThemePack,
  I18nManager,
  GlobalContext,
} from '../common'
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
    locale = 'en_US',
    children,
  } = props
  const [ready, setReady] = React.useState<boolean>(false)
  const [key, setKey] = React.useState<number>(0)
  useEffect(() => {
    const window = Dimensions.get('window')
    I18nManager.setLocale(locale)

    ThemeManager.setThemeContext({
      ...themeContext,
      windowWidth: window.width,
      windowHeight: window.height,
    })
    ThemeManager.setMode(themeMode)
    if (themePack) {
      ThemeManager.setThemePack(themePack)
    }
    ThemeManager.computeTheme()

    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      ThemeManager.updateThemeContext({
        windowWidth: window.width,
        windowHeight: window.height,
      })
      ThemeManager.computeTheme()
      setKey((prev) => prev + 1)
    })
    setKey((prev) => prev + 1)
    setReady(true)
    return () => {
      setReady(false)
      subscription?.remove()
    }
  }, [locale, themeMode, themePack, themeContext])
  return (
    <GlobalContext.Provider value={ready}>
      <PortalProvider>
        <SafeAreaProvider>
          {ready && <Fragment key={key}>{children}</Fragment>}
        </SafeAreaProvider>
      </PortalProvider>
    </GlobalContext.Provider>
  )
}
