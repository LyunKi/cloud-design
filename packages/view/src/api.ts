import { PropsWithThemeStyle } from '@cloud-design/configs'
import { StyleProp, ViewStyle } from 'react-native'
export interface BasicViewProps {
  style?: StyleProp<ViewStyle>
}

export type ViewProps = PropsWithThemeStyle<BasicViewProps>
