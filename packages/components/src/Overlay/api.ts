import { Fn, KV } from '@cloud-dragon/common-types'
import { ReactElement } from 'react'
import { View } from 'react-native'
import { MaskProps } from '../common'

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
  onPress: any
  isActive: boolean
}

interface ContentProps {
  ts?: KV
  onPress: Fn
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
