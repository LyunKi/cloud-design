import { GestureResponderEvent } from 'react-native'
import { Themeable } from '../common/theme'

export interface BasicViewProps {
  onPress?: (event: GestureResponderEvent) => any
  ref?: any
}

export type ViewProps = Themeable<BasicViewProps>
