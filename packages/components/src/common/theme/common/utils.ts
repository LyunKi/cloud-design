import { merge } from 'lodash'
import { CloudDesignTheme, PresetThemePack } from './types'
import { DEFAULT_THEME } from './constants'

export function extendTheme(
  themePack: CloudDesignTheme,
  presetThemePack: PresetThemePack = 'cloud-light'
) {
  return merge({}, DEFAULT_THEME[presetThemePack], themePack)
}
