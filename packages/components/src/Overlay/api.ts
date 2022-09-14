import { KV } from '@cloud-dragon/common-types'
import { ReactElement } from 'react'
import { View } from 'react-native'

interface TriggerRect {
  left: number
  top: number
  height: number
  width: number
}

interface TriggerProps {
  viewRef: React.RefObject<View>
  onPress: Function
}

export interface OverlayProps {
  renderTrigger: (triggerProps: TriggerProps) => ReactElement
  maskTs?: KV
  hideMask?: boolean
  contentTs?: KV
  getContentPosition?: (rect: TriggerRect) => {
    left: number
    top: number
  }
}
