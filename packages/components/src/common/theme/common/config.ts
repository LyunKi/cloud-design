import { Dimensions } from 'react-native'

const DEFAULT_BASE_FONT_SIZE = 16

const window = Dimensions.get('window')

export const DEFAULT_THEME_CONFIG = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  windowWidth: window?.width ?? 375,
  windowHeight: window?.height ?? 667,
}

export interface ThemeContext {
  baseFontSize: number
  windowWidth: number
  windowHeight: number
}
