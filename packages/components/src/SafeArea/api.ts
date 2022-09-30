import { SafeAreaViewProps } from 'react-native-safe-area-context'
import { ThemeStyle } from '../common'

export interface SafeAreaProps extends SafeAreaViewProps {
  ts: ThemeStyle
}
