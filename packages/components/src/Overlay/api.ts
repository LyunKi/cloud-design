import { KV } from '@cloud-dragon/common-types'
import { ReactElement } from 'react'
import { View } from 'react-native'

interface TriggerRect {
  x: number
  y: number
  height: number
  width: number
  pageX: number
  pageY: number
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
