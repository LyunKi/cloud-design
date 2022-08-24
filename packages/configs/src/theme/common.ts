import isString from 'lodash/isString'
import reduce from 'lodash/reduce'
import mapValues from 'lodash/mapValues'
import { createContext, useCallback, useContext } from 'react'
import { KV } from '@cloud-dragon/common-types'
import { EVA_THEME_PACK } from './eva'

export type CloudDesignTheme = Record<string, string>

export type PresetThemePack = 'eva-light' | 'eva-dark'

export type ThemePack = PresetThemePack | CloudDesignTheme

export const DEFAULT_THEME = {
  'eva-light': EVA_THEME_PACK.light,
  'eva-dark': EVA_THEME_PACK.dark,
}

export const ThemeContext = createContext<CloudDesignTheme>(
  EVA_THEME_PACK.light
)

export function useTheme(): CloudDesignTheme {
  const theme = useContext(ThemeContext)
  return theme
}

export function isPresetThemePack(
  themePack: ThemePack
): themePack is PresetThemePack {
  return isString(themePack)
}

function isReferenceValue(value: string): boolean {
  return value.startsWith('$')
}

function processThemePack(themePack: CloudDesignTheme): CloudDesignTheme {
  const variables = reduce(
    themePack,
    (records, value, key) => {
      if (!isReferenceValue(value)) {
        records[key] = value
      }
      return records
    },
    {} as CloudDesignTheme
  )
  return mapValues(themePack, (value) => {
    return isReferenceValue(value) ? variables[value] : value
  })
}

export function getTheme(themePack: ThemePack): CloudDesignTheme {
  const originThemePack = isPresetThemePack(themePack)
    ? DEFAULT_THEME[themePack]
    : themePack
  return processThemePack(originThemePack)
}

export function getThemedStyle(theme: CloudDesignTheme, style: KV) {
  return mapValues(style, (value) => {
    return isReferenceValue(value) ? theme[value] : value
  })
}

export function useThemed() {
  const theme = useTheme()
  return useCallback((style: KV) => getThemedStyle(theme, style), [theme])
}
