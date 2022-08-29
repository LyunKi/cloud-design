import { StyleProp, ViewStyle } from 'react-native'
import { PropsWithThemeStyle } from '../ConfigProvider'
export interface BasicViewProps {
  style?: StyleProp<ViewStyle>
  value?: string
}

export type ViewProps = PropsWithThemeStyle<BasicViewProps>
