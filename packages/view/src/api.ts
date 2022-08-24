import { KV } from '@cloud-dragon/common-types'
import { Themed } from '@cloud-design/configs/theme'
export interface BasicViewProps {
  style: KV
}

export type ViewProps = Themed<BasicViewProps>
