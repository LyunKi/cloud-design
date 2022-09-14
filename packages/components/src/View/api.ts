import { GestureResponderEvent } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface ViewProps {
  onPress?: (event: GestureResponderEvent) => any
  ref?: any
}
