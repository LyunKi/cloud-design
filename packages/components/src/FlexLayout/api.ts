import {
  FlexStyle,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native'
import { Themeable } from '../common/theme'

export interface BasicFlexLayoutProps {
  direction?: FlexStyle['flexDirection']
  spacing?: number
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  wrap?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: (event: GestureResponderEvent) => any
}

export type FlexLayoutProps = Themeable<BasicFlexLayoutProps>
