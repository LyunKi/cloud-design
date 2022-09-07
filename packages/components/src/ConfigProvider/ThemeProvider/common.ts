import isString from 'lodash/isString'
import reduce from 'lodash/reduce'
import mapValues from 'lodash/mapValues'
import React, {
  ComponentType,
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react'
import { StyleSheet } from 'react-native'
import { KV, NestedString } from '@cloud-dragon/common-types'
import { CLOUD_THEME_PACK } from './cloud'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import { merge } from 'lodash'

export type CloudDesignTheme = KV<any>

export type PresetThemePack = 'cloud-light' | 'cloud-dark'

export type ThemePack = PresetThemePack | CloudDesignTheme

export interface ThemeConfig {
  baseFontSize: number
}

export const DEFAULT_BASE_FONT_SIZE = 16

export const DEFAULT_THEME_CONFIG = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
}

export const DEFAULT_THEME = {
  'cloud-light': CLOUD_THEME_PACK.light,
  'cloud-dark': CLOUD_THEME_PACK.dark,
}

export const ThemeContext = createContext<CloudDesignTheme>({
  theme: processThemePack(CLOUD_THEME_PACK.light),
  config: DEFAULT_THEME_CONFIG,
})

export function useThemeConfig(): CloudDesignTheme {
  return useContext(ThemeContext)
}

export function isPresetThemePack(
  themePack: ThemePack
): themePack is PresetThemePack {
  return isString(themePack)
}

function isReferenceValue(value: string | NestedString): value is string {
  return isString(value) && value.startsWith('$') && !value.startsWith('$rem:')
}

function isRemValue(value: any) {
  return isString(value) && value.startsWith('$rem:')
}

function handleRemValue(value: string, baseFontSize: number) {
  const multiple = Number(value.slice(5))
  return baseFontSize * multiple
}

function processThemePack(
  themePack: CloudDesignTheme,
  themeConfig?: ThemeConfig
): CloudDesignTheme {
  const parseThemeVariables = (
    themeObject: CloudDesignTheme
  ): CloudDesignTheme => {
    return reduce(
      themeObject,
      (records, value, key) => {
        if (isObject(value)) {
          records[key] = parseThemeVariables(value)
        } else if (isRemValue(value)) {
          records[key] = handleRemValue(
            value,
            themeConfig?.baseFontSize ?? DEFAULT_BASE_FONT_SIZE
          )
        } else {
          records[key] = value
        }
        return records
      },
      {} as CloudDesignTheme
    )
  }
  const variables = parseThemeVariables(themePack)
  const parseTheme = (themeObject: CloudDesignTheme): CloudDesignTheme => {
    return reduce(
      themeObject,
      (records, value, key) => {
        if (isObject(value)) {
          records[key] = parseTheme(value)
        } else if (isReferenceValue(value)) {
          records[key] = get(variables, value.slice(1))
        } else {
          records[key] = value
        }
        return records
      },
      {} as CloudDesignTheme
    )
  }
  return parseTheme(variables)
}

export function getThemeConfig(themeConfig?: ThemeConfig) {
  return merge({}, DEFAULT_THEME_CONFIG, themeConfig)
}

export function getTheme(
  themePack: ThemePack,
  themeConfig?: ThemeConfig
): CloudDesignTheme {
  const originThemePack = isPresetThemePack(themePack)
    ? DEFAULT_THEME[themePack]
    : themePack
  return processThemePack(originThemePack, themeConfig)
}

function getThemedStyle(
  theme: CloudDesignTheme,
  style: KV,
  themeConfig: ThemeConfig
) {
  const { baseFontSize = DEFAULT_BASE_FONT_SIZE } = themeConfig
  return mapValues(style, (value) => {
    if (isRemValue(value)) {
      return handleRemValue(value, baseFontSize)
    }
    if (isReferenceValue(value)) {
      const path = value.slice(1)
      return get(theme, path)
    }
    return value
  })
}

export function useThemed() {
  const { theme, config } = useThemeConfig()
  return useCallback(
    (style: KV) => getThemedStyle(theme, style, config),
    [theme, config]
  )
}

export type PropsWithThemeStyle<Props = any> = Props & {
  ts?: KV
  style?: KV
}

export type Themed<Props = any> = PropsWithThemeStyle<Props> & {
  theme?: CloudDesignTheme
}

export type ThemedComponent<Props = any> = ComponentType<
  PropsWithChildren<Themed<Props>>
>

export function withTheme<Props = any>(
  Component: ComponentType<PropsWithChildren<Themed<Props>>>
): ThemedComponent<Props> {
  return (props) => {
    const { ts = {}, children, style, theme: originTheme, ...others } = props
    const { theme } = useThemeConfig()
    const themed = useThemed()
    return React.createElement(
      Component,
      {
        style: StyleSheet.flatten([themed(ts), style]),
        theme: originTheme ?? theme,
        ...others,
      } as any,
      children
    )
  }
}
