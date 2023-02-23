import { merge } from 'lodash'
import { ThemeManager } from './ThemeManager'
import { CloudDesignTheme } from './types'

export function extendTheme(themePack: CloudDesignTheme) {
  return merge({}, ThemeManager.getThemePack(), themePack)
}
