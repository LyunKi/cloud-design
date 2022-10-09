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
  isActive: boolean
}

interface MaskProps {
  ts?: KV
  disableCloseOnPress?: boolean
}

interface ContentProps {
  ts?: KV
  onPress: Function
}

export interface OverlayProps {
  renderTrigger?: (triggerProps: TriggerProps) => ReactElement
  renderContent: (contentProps: ContentProps) => ReactElement
  mask?: MaskProps
  contentContainerTs?: KV
  getContentPosition?: (rect: TriggerRect) => {
    left: number
    top: number
  }
}
