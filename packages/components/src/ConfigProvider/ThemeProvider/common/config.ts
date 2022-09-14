import { Dimensions } from 'react-native'

export const DEFAULT_BASE_FONT_SIZE = 16

const window = Dimensions.get('window')

export const DEFAULT_THEME_CONFIG = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  windowWidth: window.width,
  windowHeight: window.height,
}

export interface ThemeConfig {
  baseFontSize: number
  windowWidth: number
  windowHeight: number
}
