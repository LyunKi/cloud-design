import React, { PropsWithChildren, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { ThemePack, ThemeConfig, ThemeManager } from './common'

export interface ThemeProviderProps {
  themePack?: ThemePack
  themeConfig?: Partial<Omit<ThemeConfig, 'windowWidth' | 'windowHeight'>>
}

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  const { themePack = 'cloud-light', themeConfig } = props
  const [ready, setReady] = React.useState(false)
  const window = Dimensions.get('window')
  useEffect(() => {
    ThemeManager.setThemeConfig({
      ...themeConfig,
      windowWidth: window.width,
      windowHeight: window.height,
    })
    ThemeManager.setTheme(themePack)
    setReady(true)
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      ThemeManager.updateThemeConfig({
        windowWidth: window.width,
        windowHeight: window.height,
      })
    })
    return () => {
      setReady(false)
      subscription?.remove()
    }
  }, [themePack, themeConfig])
  return <>{ready && props.children}</>
}
