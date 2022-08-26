import React, { PropsWithChildren } from 'react'
import { ThemePack, ThemeContext, getTheme } from './common'

export interface ThemeProviderProps {
  themePack?: ThemePack
}

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  const { themePack = 'eva-light' } = props
  return (
    <ThemeContext.Provider value={getTheme(themePack)}>
      {props.children}
    </ThemeContext.Provider>
  )
}
