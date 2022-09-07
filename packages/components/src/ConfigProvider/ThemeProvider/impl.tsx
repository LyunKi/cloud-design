import React, { PropsWithChildren } from 'react'
import {
  ThemePack,
  ThemeContext,
  getTheme,
  ThemeConfig,
  getThemeConfig,
} from './common'

export interface ThemeProviderProps {
  themePack?: ThemePack
  themeConfig?: ThemeConfig
}

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  const { themePack = 'cloud-light', themeConfig } = props
  return (
    <ThemeContext.Provider
      value={{
        theme: getTheme(themePack, themeConfig),
        config: getThemeConfig(themeConfig),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
