import { Dimensions } from 'react-native'

const window = Dimensions.get('window')
export interface ThemeContext {
  baseFontSize: number
  windowWidth: number
  windowHeight: number
}
export const DEFAULT_THEME_CONFIG: ThemeContext = {
  baseFontSize: 16,
  windowWidth: window?.width ?? 375,
  windowHeight: window?.height ?? 667,
}
