import { Fn } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'
import { Id, RenderProp, ThemedStyle } from '../common'

export interface RenderItemOptions {
  onItemChange: Fn
  id: Id
  isSelected: boolean
}

export interface TabItem {
  id?: Id
  title: string | RenderProp<[RenderItemOptions]>
  renderContent: RenderProp<[RenderItemOptions]>
}

export interface TabsProps {
  items: TabItem[]
  value: string
  onChange?: Fn<[Id]>
  titleTs?: ThemedStyle
  contentTs?: ThemedStyle
  separator?: ReactNode
  ts: ThemedStyle
}
