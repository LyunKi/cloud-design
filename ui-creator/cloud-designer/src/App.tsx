import { Text as RnText } from 'react-native'
import {
  CloudRnAppBuilder,
  CloudRnWidgetBuilder,
} from '@ui-creator/cloud-builder'
import { AppConfig } from './config/app'

const Text = ({ value }: any) => {
  return <RnText>{value}</RnText>
}

CloudRnWidgetBuilder.registerWidget('Text', Text)

export default function App() {
  return CloudRnAppBuilder.build(AppConfig)
}
