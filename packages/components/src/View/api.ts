import { PropsWithRef, PropsWithChildren } from 'react'
import { GestureResponderEvent } from 'react-native'
import { Themeable } from '../common/theme'

export interface BasicViewProps {
  onPress?: (event: GestureResponderEvent) => any
  ref?: any
  stopPropagation?: boolean
}

export type ViewProps = PropsWithRef<
  PropsWithChildren<Themeable<BasicViewProps>>
>
