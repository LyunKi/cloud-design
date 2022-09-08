import React, { PropsWithChildren, useEffect } from 'react'
import { ThemePack, ThemeConfig, ThemeManager } from './common'

export interface ThemeProviderProps {
  themePack?: ThemePack
  themeConfig?: ThemeConfig
}

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  const { themePack = 'cloud-light', themeConfig } = props
  const [ready, setReady] = React.useState(false)
  useEffect(() => {
    ThemeManager.setThemeConfig(themeConfig)
    ThemeManager.setTheme(themePack)
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [themePack, themeConfig])
  return <>{ready && props.children}</>
}
