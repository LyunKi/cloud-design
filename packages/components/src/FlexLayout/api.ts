import { FlexStyle, StyleProp, ViewStyle } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'

export interface BasicFlexLayoutProps {
  direction?: FlexStyle['flexDirection']
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  style?: StyleProp<ViewStyle>
}

export type FlexLayoutProps = PropsWithThemeStyle<BasicFlexLayoutProps>
