import { GestureResponderEvent } from 'react-native'

export interface ViewProps {
  onPress?: (event: GestureResponderEvent) => any
  ref?: any
}
