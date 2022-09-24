import { NestedString, KV } from '@cloud-dragon/common-types'
import { reduce, isObject, get, isString, merge, mapValues } from 'lodash'
import { ThemeContext, DEFAULT_THEME_CONFIG } from './config'
import { CloudDesignTheme, PresetThemePack, ThemePack } from './types'
import { DEFAULT_THEME } from './constants'

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
  public themeContext: ThemeContext = DEFAULT_THEME_CONFIG

  public theme: CloudDesignTheme = this.processThemePack(
    DEFAULT_THEME['cloud-light']
  )

  public mode = 'light'

  public get isDark() {
    return this.mode === 'dark'
  }

  private handlePresetThemeValue(value: any) {
    const { baseFontSize, windowHeight, windowWidth } = this.themeContext
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

  public themedValue(value: any) {
    if (isReferenceValue(value)) {
      const path = value.slice(1)
      return get(this.theme, path)
    }
    return this.handlePresetThemeValue(value)
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
            records[key] = this.handlePresetThemeValue(value)
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

  public themed(style?: KV) {
    return mapValues(style, (value) => {
      return this.themedValue(value)
    })
  }

  public setThemeContext(themeContext?: Partial<ThemeContext>) {
    this.themeContext = merge({}, DEFAULT_THEME_CONFIG, themeContext)
  }

  public updateThemeContext(themeContext?: Partial<ThemeContext>) {
    merge(this.themeContext, themeContext)
  }

  public setTheme(themePack: ThemePack) {
    const originThemePack = isPresetThemePack(themePack)
      ? DEFAULT_THEME[themePack]
      : themePack
    this.theme = this.processThemePack(originThemePack)
  }
}

export const ThemeManager = new ThemeManagerClass()
