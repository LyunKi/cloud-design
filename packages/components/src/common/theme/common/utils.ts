import { merge } from 'lodash'
import { CLOUD_THEME_PACK } from '../cloud'
import { CloudDesignTheme } from './types'

export function extendTheme(themePack: CloudDesignTheme) {
  return merge({}, CLOUD_THEME_PACK, themePack)
}
