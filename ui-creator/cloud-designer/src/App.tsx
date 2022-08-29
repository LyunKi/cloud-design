import { CloudRnAppBuilder, loadPrelude } from '@ui-creator/cloud-builder'
import { AppConfig } from './config/app'

loadPrelude()

export default function App() {
  return CloudRnAppBuilder.build(AppConfig)
}
