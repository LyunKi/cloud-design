import { FlexStyle, StyleProp, ViewStyle } from 'react-native'
import { PropsWithThemeStyle } from '../common/theme'

export interface BasicFlexLayoutProps {
  direction?: FlexStyle['flexDirection']
  spacing?: number
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  wrap?: boolean
  style?: StyleProp<ViewStyle>
}

export type FlexLayoutProps = PropsWithThemeStyle<BasicFlexLayoutProps>
