import { NestedString } from '@cloud-dragon/common-types'
import { reduce, isObject, get, isString, merge } from 'lodash'
import React, { ComponentType, forwardRef, PropsWithChildren } from 'react'
import { ThemeConfig, DEFAULT_THEME_CONFIG } from './config'
import {
  CloudDesignTheme,
  PresetThemePack,
  Themed,
  ThemedComponent,
  ThemePack,
} from './types'
import { StyleSheet } from 'react-native'
import { KV } from '@cloud-dragon/common-types'
import { mapValues } from 'lodash'
import { DEFAULT_THEME } from './constants'
import { CLOUD_THEME_PACK } from '../cloud'

function isPresetThemePack(themePack: ThemePack): themePack is PresetThemePack {
  return isString(themePack)
}

function isReferenceValue(value: string | NestedString): value is string {
  return isString(value) && value.startsWith('$') && !value.includes(':')
}

function isRemValue(value: any) {
  return isString(value) && value.startsWith('$rem:')
}

function handleRemValue(value: string, baseFontSize: number) {
  const multiple = Number(value.slice(5))
  return baseFontSize * multiple
}

function isVwValue(value: any) {
  return isString(value) && value.startsWith('$vw:')
}

function handleVwValue(value: string, windowWidth: number) {
  const multiple = Number(value.slice(4))
  return (windowWidth / 100) * multiple
}

function isVhValue(value: any) {
  return isString(value) && value.startsWith('$vh:')
}
function handleVhValue(value: string, windowHeight: number) {
  const multiple = Number(value.slice(4))
  return (windowHeight / 100) * multiple
}

class ThemeManagerClass {
  public themeConfig: ThemeConfig = DEFAULT_THEME_CONFIG
  public theme: CloudDesignTheme = this.processThemePack(CLOUD_THEME_PACK.light)

  private handleThemeStyleValue(value: any) {
    if (isReferenceValue(value)) {
      const path = value.slice(1)
      return get(this.theme, path)
    }
    const { baseFontSize, windowHeight, windowWidth } = this.themeConfig
    if (isRemValue(value)) {
      return handleRemValue(value, baseFontSize)
    }
    if (isVwValue(value)) {
      return handleVwValue(value, windowWidth)
    }
    if (isVhValue(value)) {
      return handleVhValue(value, windowHeight)
    }
    return value
  }

  private processThemePack(themePack: CloudDesignTheme): CloudDesignTheme {
    const parseThemeVariables = (
      themeObject: CloudDesignTheme
    ): CloudDesignTheme => {
      return reduce(
        themeObject,
        (records, value, key) => {
          if (isObject(value)) {
            records[key] = parseThemeVariables(value)
          } else {
            records[key] = this.handleThemeStyleValue(value)
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

  public themed(style: KV) {
    return mapValues(style, (value) => {
      return this.handleThemeStyleValue(value)
    })
  }

  public setThemeConfig(themeConfig?: Partial<ThemeConfig>) {
    this.themeConfig = merge({}, DEFAULT_THEME_CONFIG, themeConfig)
  }

  public updateThemeConfig(themeConfig?: Partial<ThemeConfig>) {
    merge(this.themeConfig, themeConfig)
  }

  public setTheme(themePack: ThemePack) {
    const originThemePack = isPresetThemePack(themePack)
      ? DEFAULT_THEME[themePack]
      : themePack
    this.theme = this.processThemePack(originThemePack)
  }
}

export const ThemeManager = new ThemeManagerClass()

export function withTheme<Props = any>(
  Component: ComponentType<PropsWithChildren<Themed<Props>>>
): ThemedComponent<Props> {
  //@ts-ignore
  return forwardRef((props, ref) => {
    const { ts = {}, children, style, theme: originTheme, ...others } = props
    return React.createElement(
      Component,
      {
        style: StyleSheet.flatten([ThemeManager.themed(ts), style]),
        theme: originTheme ?? ThemeManager.theme,
        ref,
        ...others,
      } as any,
      children
    )
  })
}

export function extendTheme(
  themePack: CloudDesignTheme,
  presetThemePack: PresetThemePack = 'cloud-light'
) {
  return merge({}, DEFAULT_THEME[presetThemePack], themePack)
}

type ConditionStyle = [boolean, KV]

export function styles(...conditionStyles: ConditionStyle[]) {
  return reduce(
    conditionStyles,
    (record, value) => {
      const [condition, style] = value
      if (condition) {
        Object.assign(record, style)
      }
      return record
    },
    {}
  )
}
